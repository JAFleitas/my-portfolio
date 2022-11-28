import type { NextApiRequest, NextApiResponse } from "next";
import { transport } from "../../api/mailer.config";

type Data = {
  isSend: boolean;
};
type BodyData = {
  text: string;
  from: string;
};

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { text, from }: BodyData = req.body;

  try {
    await transport.sendMail({
      to: "gdf.frontend.developer@gmail.com",
      subject: "Mensaje Portfolio :D",
      html: `
        <h2> ${from} </h2>
        <p> ${text} </p>
      `,
    });

    res.json({ isSend: true });
  } catch (error) {
    res.json({ isSend: false });
  }
}
