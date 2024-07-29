import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'soulstones.io@gmail.com',
        pass: process.env.EMAIL_APP_PASS,
      },
    });
  }

  async sendMail(to: string, subject: string, text: string): Promise<void> {
    const mailOptions = {
      from: 'Alma Labs',
      to: to,
      subject: subject,
      html: text,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
