import { Request, Response } from "express";
import ApplyModel from "../models/applyModel";
import resend from "../config/resend";

export const postApply = async (req: Request, res: Response) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    await ApplyModel.create({
      name,
      phone,
      email,
      subject,
      message,
    });

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "karczubroland@gmail.com",
      subject: `Új kapcsolatfelvétel: ${name}`,
      html: `
        <h2>Új üzenet érkezett</h2>
        <p><b>Név:</b> ${name}</p>
        <p><b>Telefon:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Tárgy:</b> ${subject}</p>
        <p><b>Üzenet:</b></p>
        <p>${message}</p>
      `,
    });

    res.status(201).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error sending message",
    });
  }
};
