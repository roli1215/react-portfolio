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