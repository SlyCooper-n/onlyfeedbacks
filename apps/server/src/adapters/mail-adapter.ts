export interface SendMailData {
  subject: string;
  body: string;
  textBody?: string;
}

export interface MailAdapter {
  sendMail(data: SendMailData): Promise<void>;
}
