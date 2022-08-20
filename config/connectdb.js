import mongoose from "mongoose";
const CreateDatabaseConnection = () => {
  try {
    mongoose.connect(
      "mongodb+srv://reunite:reunite@atlascluster.qprthmm.mongodb.net/?retryWrites=true&w=majority",
      {},
      () => {
        console.log(`Database connected...`);
      }
    );
  } catch (e) {
    console.log(e.message);
  }
};
export default CreateDatabaseConnection;
