import { Resend } from "resend";

import { EmailStrategy } from "@elite/server/types";

interface ResendOptions {
  from: string;
  to: string[];
  apiKey?: string;
}

/**
 * Resend-backed email transport.
 * The API key defaults to the RESEND_API_KEY environment variable.
 *
 * TODO: consider refactor to Nodemailer.
 */
export const resendEmail = ({ from, to, apiKey }: ResendOptions): EmailStrategy => ({
  async send({ subject, html }) {
    const resend = new Resend(apiKey ?? process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({ from, to, subject, html });

    return { error };
  }
});
