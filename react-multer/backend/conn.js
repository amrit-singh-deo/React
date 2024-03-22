import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB ✅");
  })
  .catch((err) => {
    console.log("Taking longer than usual .. ❗");
    console.log(err);
  });
