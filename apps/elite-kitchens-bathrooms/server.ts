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
  // TODO: refactor this functionality when email service is decided on (likely GoDaddy SMTP).
  email: nodemailerEmail({
    from: "Elite Kitchens & Bathrooms <joe@elitekitchensbathrooms.com>",
    to: ["joe@elitekitchensbathrooms.com"]
  })
});
