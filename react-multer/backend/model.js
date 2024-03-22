import mongoose from "mongoose";

const imgSchema = new mongoose.Schema({
  title: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

export default mongoose.model("Image", imgSchema);
