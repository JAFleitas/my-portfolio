import { createTransport } from "nodemailer";

const config = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
};
export const transport = createTransport(config);
