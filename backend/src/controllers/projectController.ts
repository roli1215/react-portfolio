import { Request, Response } from 'express';
import ProjectModel from '../models/projectModel';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await ProjectModel.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message || 'Error fetching projects' });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const {
      title,
      stack,
      descriptionHU,
      descriptionEN,
      image
    } = req.body;

    if (!title || !stack || !descriptionHU || !descriptionEN || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newProject = new ProjectModel({
      title,
      stack,
      descriptionHU,
      descriptionEN,
      image,
    });
    const savedProject = await newProject.save();

    res.status(201).json({ message: 'Project created successfully', project: savedProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: (error as Error).message || 'Server error' });
  }
};

export const uploadProjectImage = async (
  req: Request,
  res: Response
) => {

  try {

    if (!req.file) {
      return res.status(400).json({
        message: "No image uploaded"
      });
    }


    const imagePath =
      `/uploads/projects/${req.file.filename}`;


    res.status(200).json({
      image: imagePath
    });


  } catch (error) {

    res.status(500).json({
      message:
        (error as Error).message
    });

  }

};
