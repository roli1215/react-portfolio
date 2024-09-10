import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

if (!MONGOURL) {
  throw new Error('MONGO_URL is not defined in the environment variables');
}

mongoose.connect(MONGOURL).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model('datas', userSchema);

app.get('/datas', async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});
