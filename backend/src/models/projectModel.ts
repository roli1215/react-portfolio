import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title : {type: String, required: true},
  stack : {type: String, required: true},
  description : {type: String, required: true},
  imageId : {type: String, required: true},

}, { timestamps: true });

const ProjectModel = mongoose.model('projects', projectSchema);

export default ProjectModel;