
import { ImageDTO } from "./ImageDTO";

export interface ProjectDTO {
  _id: string;
  title: string; 
  stack: string; 
  description: string; 
  imageId: ImageDTO;
  createdAt: string; 
  updatedAt: string; 
}
