import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGODB_URL;
const CreateDatabaseConnection = () => {
  try {
    mongoose.connect(MONGODB_URL, {}, () => {
      console.log(`Database connected...`);
    });
  } catch (e) {
    console.log(e.message);
  }
};
export default CreateDatabaseConnection;
