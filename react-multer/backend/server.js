import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import cors from "cors";
import "./conn.js";
import imgSchema from "./model.js";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const imageInfo = new imgSchema({
      title: req.body.title,
      desc: req.body.desc,
      img: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    });

    await imageInfo.save();
    console.log("Image uploaded successfully")
    res
      .status(200)
      .json({ success: true, message: "Image uploaded successfully" });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.get('/getImages', async (req, res) => {
  try {
    const images = await imgSchema.find();
    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening to port ${port} . . . ✅`);
});
