import { Request, Response } from "express";
import ProjectModel from "../models/projectModel";
import fs from "fs";
import path from "path";

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await ProjectModel.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message || "Error fetching projects" });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const { title, stack, descriptionHU, descriptionEN, image } = req.body;

    if (!title || !stack || !descriptionHU || !descriptionEN || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProject = new ProjectModel({
      title,
      stack,
      descriptionHU,
      descriptionEN,
      image,
    });
    const savedProject = await newProject.save();

    res.status(201).json({ message: "Project created successfully", project: savedProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: (error as Error).message || "Server error" });
  }
};

export const uploadProjectImage = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No image uploaded",
      });
    }

    const imagePath = `/uploads/projects/${req.file.filename}`;

    res.status(200).json({
      image: imagePath,
    });
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { title, stack, descriptionHU, descriptionEN, image } = req.body;

    const project = await ProjectModel.findById(id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    const updateData: any = {
      title,
      stack,
      descriptionHU,
      descriptionEN,
    };

    if (image && project.image) {
      const oldImagePath = path.join(process.cwd(), project.image);

      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }

      updateData.image = image;
    }

    const updatedProject = await ProjectModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.status(200).json(updatedProject);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: (error as Error).message,
    });
  }
};
export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const project = await ProjectModel.findById(id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    if (project.image) {
      const imagePath = path.join(process.cwd(), project.image.replace("/", ""));

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await ProjectModel.findByIdAndDelete(id);

    res.status(200).json({
      message: "Project deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: (error as Error).message,
    });
  }
};
