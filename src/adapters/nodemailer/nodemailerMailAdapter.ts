import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "001faee59c0dda",
    pass: "69dafb03e4a24e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
    from: 'Equipe Feedget <teste@teste.com',
    to: 'Lucas Rimis <lucasrimis@gmail.com>',
    subject: subject,
    html: body,
  });
  };
}