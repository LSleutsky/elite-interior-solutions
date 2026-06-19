import compression from "compression";
import express from "express";
import morgan from "morgan";
import path from "path";

import { ContactPayload, ServerConfig } from "@elite/server/types";

const CACHE_TTL = 5 * 60 * 1000;

/**
 * Builds and starts the Express server for an app.
 * Hosts the shared /api/contact and /api/images endpoints, then serves the app
 * (Vite middleware in development, static build with SPA fallback in production).
 *
 * @param config Per-app server configuration (ImageKit folder, email transport, service labels).
 *
 * @returns {Promise<import("express").Express>} The running Express application.
 */
export async function createServer(config: ServerConfig) {
  const DEVELOPMENT = process.env.NODE_ENV === "development";
  const PORT = config.port ?? Number.parseInt(process.env.PORT || "3000");

  let cachedImages: { data: object; timestamp: number } | null = null;

  const app = express();

  app.use(compression());
  app.disable("x-powered-by");
  app.use(express.json());

  app.post("/api/contact", async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        spouseName,
        streetAddress,
        city,
        state,
        zipCode,
        email,
        phone,
        service,
        comments
      } = req.body as ContactPayload;

      if (!firstName || !lastName || !streetAddress || !city || !state || !zipCode || !phone) {
        res.status(400).json({ error: "Missing required fields" });

        return;
      }

      const serviceName = config.serviceLabels[service as string] || "Not specified";

      const { error } = await config.email.send({
        subject: "CONTACT FORM SUBMISSION",
        html: `
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> ${firstName}${spouseName ? ` & ${spouseName}` : ""} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>

        <h2>Address</h2>
        <p>${streetAddress}<br>${city}, ${state} ${zipCode}</p>

        <h2>Service Requested</h2>
        <p>${serviceName}</p>

        ${comments ? `<h3>Additional Comments</h3><p>${comments}</p>` : ""}
      `
      });

      if (error) {
        console.error("Contact email error:", error);

        res.status(500).json({ error: "Failed to send email" });

        return;
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);

      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/images", async (_, res) => {
    const imageKitPrivateKey = process.env.IMAGEKIT_PRIVATE_KEY || "";

    if (!imageKitPrivateKey) {
      res.json({ categories: [] });

      return;
    }

    if (cachedImages && Date.now() - cachedImages.timestamp < CACHE_TTL) {
      res.json(cachedImages.data);

      return;
    }

    try {
      const authHeader = `Basic ${Buffer.from(imageKitPrivateKey + ":").toString("base64")}`;

      const results = await Promise.all(
        config.imageKit.categories.map(async (category) => {
          const url = `https://api.imagekit.io/v1/files?path=/${config.imageKit.folder}/${category}/&fileType=image&type=file&limit=100`;
          const response = await fetch(url, { headers: { Authorization: authHeader } });

          if (!response.ok) {
            return { category, images: [] };
          }

          const files = (await response.json()) as {
            name: string;
            width: number;
            height: number;
          }[];

          const images = files.map((file) => ({
            filename: file.name,
            width: file.width,
            height: file.height
          }));

          return { category, images };
        })
      );

      const data = { categories: results.filter((cat) => cat.images.length > 0) };

      cachedImages = { data, timestamp: Date.now() };

      res.json(data);
    } catch (error) {
      console.error(`Error fetching images from ImageKit: ${error}`);

      res.status(500).json({ error: "Failed to fetch images" });
    }
  });

  if (DEVELOPMENT) {
    console.log("Starting development server");

    const viteDevServer = await import("vite").then((vite) =>
      vite.createServer({
        server: { middlewareMode: true }
      })
    );

    app.use(viteDevServer.middlewares);
    app.use(async (req, res, next) => {
      try {
        const source = await viteDevServer.ssrLoadModule("./server/app.ts");

        return await source.app(req, res, next);
      } catch (error) {
        if (typeof error === "object" && error instanceof Error) {
          viteDevServer.ssrFixStacktrace(error);
        }

        next(error);
      }
    });
  } else {
    console.log("Starting production server");

    app.use(morgan("tiny"));
    app.use("/assets", express.static("build/client/assets", { immutable: true, maxAge: "1y" }));
    app.use(express.static("build/client", { maxAge: "1h" }));
    // SPA fallback - serve index.html for all non-API routes
    app.use((_, res) => {
      res.sendFile(path.join(process.cwd(), "build/client/index.html"));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  return app;
}
