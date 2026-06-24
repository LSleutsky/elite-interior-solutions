import { createServer } from "@elite/server/createServer";
import { nodemailerEmail } from "@elite/server/email/nodemailer";

await createServer({
  imageKit: {
    folder: "elite-kitchens-bathrooms",
    categories: ["kitchens", "bathrooms"]
  },
  serviceLabels: {
    "kitchen-remodeling": "Kitchen Remodeling",
    "bathroom-remodeling": "Bathroom Remodeling",
    "full-renovation": "Full Renovation",
    other: "Other"
  },
  email: nodemailerEmail({
    from: `Elite Interior Renewals <${process.env.SMTP_USER}>`,
    to: ["joe@elitekitchensbathrooms.com"]
  })
});
