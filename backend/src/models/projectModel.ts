import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title : {type: String, required: true},
  stack : {type: String, required: true},
  descriptionHU : {type: String, required: true},
  descriptionEN : {type: String, required: true},
  imageId : {type: mongoose.Schema.Types.ObjectId, ref: 'images', required: true},

}, { timestamps: true });

const ProjectModel = mongoose.model('projects', projectSchema);

export default ProjectModel;