import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "010ae600ab4981",
    pass: "092506d4b2fcea",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body, textBody }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedback Widget <opa@gmail.com>",
      to: "Gabriel VS Frasão <gabrielvitor.frasao@gmail.com>",
      subject: subject,
      html: body,
      text: textBody,
    });
  }
}

export const nodemailerMailAdapter = new NodemailerMailAdapter();
