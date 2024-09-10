
import { Request, Response } from 'express';
import ProjectModel from '../models/projectModel';

export const getProjects = async (req: Request, res: Response) => {
    try {
      const projects = await ProjectModel.find();
      
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching projects', error });
    }
  };