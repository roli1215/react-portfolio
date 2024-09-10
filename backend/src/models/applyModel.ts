import mongoose from "mongoose";

const applySchema = new mongoose.Schema({
  name : {type: String, required: true},
  phone : {type: String, required: true},
  email : {type: String, required: true},
  subject : {type: String, required: true},
  message : {type: String, required: true},
}, { timestamps: true });

const ApplyModel = mongoose.model('applies', applySchema);

export default ApplyModel;