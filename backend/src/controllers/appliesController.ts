import { Request, Response } from "express";
import resend from "../config/resend";

export const sendApply = async (req: Request, res: Response) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    await resend.emails.send({
      from: process.env.MAIL_FROM!,

      to: process.env.MAIL_TO!,

      subject: `Új kapcsolat: ${subject}`,
      html: `<h2>Új kapcsolatfelvétel</h2> 
        <p><b>Név:</b> ${name}</p>
        <p><b>Telefon:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <hr>
        <p>${message}</p>
      `,
    });

    res.json({
      message: "Üzenet sikeresen elküldve!",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Üzenet elküldése sikertelen!",
    });
  }
};
