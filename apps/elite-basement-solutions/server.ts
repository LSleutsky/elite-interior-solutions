import { createServer } from "@elite/server/createServer";
import { resendEmail } from "@elite/server/email/resend";

await createServer({
  imageKit: {
    folder: "elite-basement-solutions",
    categories: ["waterproofing", "mold", "foundation", "remodeling"]
  },
  serviceLabels: {
    waterproofing: "Waterproofing",
    "mold-remediation": "Mold Remediation",
    "basement-renovations": "Basement Renovations",
    other: "Other"
  },
  // TODO: consider refactor to Nodemailer.
  email: resendEmail({
    from: "Elite Basement Solutions <contact@elitebasementsolutions.com>",
    to: ["elitebasementsolutionsinc@gmail.com"]
  })
});
