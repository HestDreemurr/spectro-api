import "dotenv/config"
import { IMailProvider, IMessage } from "@/providers/IMailProvider"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

export class MailtrapMailProvider implements IMailProvider {
  private tranporter: Mail
  
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD
      }
    })
  }
  
  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      from: "Equipe Spectro <spectro@app.com>",
      to: message.to,
      subject: message.subject,
      html: message.body
    })
  }
}