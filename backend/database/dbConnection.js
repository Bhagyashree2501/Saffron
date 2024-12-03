import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

export const dbConnection = async () => {
  await mongoose.connect('mongodb+srv://restaurant:admin@cluster0.rqudr.mongodb.net/abc?retryWrites=true&w=majority&appName=Cluster0', {
      
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
};