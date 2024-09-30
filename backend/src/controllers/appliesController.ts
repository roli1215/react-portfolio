import { Request, Response } from 'express';
import ApplyModel from '../models/applyModel';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const getApplies = async (req: Request, res: Response) => {
  try {
    const applies = await ApplyModel.find();
    res.json(applies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applies', error });
  }
};

export const postApply = async (req: Request, res: Response) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    const newApply = new ApplyModel({
      name,
      phone,
      email,
      subject,
      message,
    });

    await newApply.save();

    const msg = {
      to: 'karczubroland@gmail.com', 
      from: 'karczubroland@gmail.com',
      subject: `Szeretné veled a kapcsolatot felvenni: ${name}`,
      text: `Új megkeresés érkezett, űrlap adatai:\n\nNév: ${name}\nTelefonszám: ${phone}\nEmail-cím: ${email}\nTárgy: ${subject}\nÜzenet:\n${message}`,
    };

    try {
      await sgMail.send(msg);
      res.status(201).json({ message: 'Apply created and email sent successfully' });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      res.status(500).json({ message: 'Apply created, but email failed to send', emailError });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error creating apply', error });
  }
};
