import { Request, Response } from "express";
import resend from "../config/resend";
import { applySchema } from "../config/validation";

export const sendApply = async (req: Request, res: Response) => {
  try {
    const data = applySchema.parse(req.body);

    const { name, phone, email, subject, message } = data;

    await resend.emails.send({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      replyTo: email,
      subject: `Új kapcsolat: ${subject}`,
      html: `<div style="font-family:Arial; max-width:600px; margin:auto; padding:20px; border:1px solid #ddd; border-radius:10px;">
            <h2 style="color:#111"> Új kapcsolatfelvétel </h2><hr/>
            <p><b>Név:</b> ${name}</p>
            <p><b>Telefon:</b> ${phone}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Tárgy:</b> ${subject}</p>
            <div style="background:#f5f5f5;padding:15px;border-radius:8px;margin-top:20px;">${message}</div>
            </div>
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
