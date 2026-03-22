import compression from "compression";
import express from "express";
import morgan from "morgan";
import path from "path";
import { Resend } from "resend";

const IMAGEKIT_PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY || "";
const CATEGORIES = ["waterproofing", "mold", "foundation", "remodeling"];
const DEVELOPMENT = process.env.NODE_ENV === "development";
const PORT = Number.parseInt(process.env.PORT || "3000");
const CACHE_TTL = 5 * 60 * 1000;
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
    } = req.body;

    if (!firstName || !lastName || !streetAddress || !city || !state || !zipCode || !phone) {
      res.status(400).json({ error: "Missing required fields" });

      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const serviceMap: Record<string, string> = {
      waterproofing: "Waterproofing",
      "mold-remediation": "Mold Remediation",
      "basement-renovations": "Basement Renovations",
      other: "Other"
    };

    const serviceName = serviceMap[service as string] || "Not specified";

    const { error } = await resend.emails.send({
      from: "Elite Basement Solutions <contact@elitebasementsolutions.com>",
      to: ["elitebasementsolutionsinc@gmail.com"],
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
      console.error("Resend error:", error);

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
  if (!IMAGEKIT_PRIVATE_KEY) {
    res.json({ categories: [] });

    return;
  }

  if (cachedImages && Date.now() - cachedImages.timestamp < CACHE_TTL) {
    res.json(cachedImages.data);

    return;
  }

  try {
    const authHeader = `Basic ${Buffer.from(IMAGEKIT_PRIVATE_KEY + ":").toString("base64")}`;

    const results = await Promise.all(
      CATEGORIES.map(async (category) => {
        const url = `https://api.imagekit.io/v1/files?path=/elite-basement-solutions/${category}/&fileType=image&type=file&limit=100`;
        const response = await fetch(url, { headers: { Authorization: authHeader } });

        if (!response.ok) {
          return { category, images: [] };
        }

        const files = (await response.json()) as { name: string; width: number; height: number }[];

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

  process.loadEnvFile();

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
