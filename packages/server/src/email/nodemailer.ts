import nodemailer from "nodemailer";

import { EmailStrategy } from "@elite/server/types";

interface NodemailerOptions {
  from: string;
  to: string[];
}

/**
 * Nodemailer-backed email transport template.
 *
 * TODO: refactor this functionality when email service is decided on.
 * The likely target is GoDaddy SMTP (or Google Workspace). Once credentials are provisioned,
 * build a real transport and send the message, e.g.:
 *
 * @example
 * const transport = nodemailer.createTransport({
 *   host: process.env.SMTP_HOST,
 *   port: Number(process.env.SMTP_PORT),
 *   secure: true,
 *   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
 * });
 * await transport.sendMail({ from, to, subject, html });
 */
export const nodemailerEmail = ({ from, to }: NodemailerOptions): EmailStrategy => ({
  async send({ subject, html }) {
    // TODO: refactor this functionality when email service is decided on.
    // This is an intentionally inert placeholder so the contact endpoint is wired but does not
    // pretend to deliver mail. It reports an explicit error rather than failing silently.
    void nodemailer;
    void from;
    void to;
    void subject;
    void html;

    return { error: new Error("Email transport not configured yet") };
  }
});
