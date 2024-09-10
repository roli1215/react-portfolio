import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  imageString : {type: String, required: true},
  altText : {type: String, required: true},
}, { timestamps: true });

const ImageModel = mongoose.model('images', imageSchema);

export default ImageModel;