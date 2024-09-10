import { Request, Response } from 'express';
import ApplyModel from '../models/applyModel';

export const getApplies = async (req: Request, res: Response) => {
  try {
    const users = await ApplyModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

export const postApply = async (req : Request, res: Response) => {
  try {
    const { name, phone, email ,subject, message } = req.body;

    const newApply = new ApplyModel({
      name,
      phone,
      email,
      subject,
      message,
    });

    await newApply.save();
    res.status(201).json({ message: 'Apply created successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Error creating apply', error });
  }
}