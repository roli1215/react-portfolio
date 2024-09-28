import { Request, Response } from 'express';
import ProjectModel from '../models/projectModel';
import ImageModel from '../models/imageModel';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await ProjectModel.find().populate('imageId');
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message || 'Error fetching projects' });
  }
};

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const { imageString, altText } = req.body;

    if (!imageString || !altText) {
      return res.status(400).json({ message: 'Image and altText are required' });
    }

    if (!imageString.startsWith('data:image/')) {
      return res.status(400).json({ message: 'Invalid image format' });
    }

    const newImage = new ImageModel({
      imageString, 
      altText,
    });

    const savedImage = await newImage.save();

    res.status(201).json({ message: 'Image uploaded successfully', image: savedImage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: (error as Error).message || 'Server error' });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const { title, stack, descriptionHU, descriptionEN, imageString, altText } = req.body;

    if (!title || !stack || !descriptionHU || !descriptionEN || !imageString || !altText) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!imageString.startsWith('data:image/')) {
      return res.status(400).json({ message: 'Invalid image format' });
    }

    const newImage = new ImageModel({
      imageString,
      altText,
    });

    const savedImage = await newImage.save();

    const newProject = new ProjectModel({
      title,
      stack,
      descriptionHU,
      descriptionEN,
      imageId: savedImage._id,
    });

    const savedProject = await newProject.save();

    res.status(201).json({ message: 'Project created successfully', project: savedProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: (error as Error).message || 'Server error' });
  }
};
