import express from "express";
import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Upload and generate image caption with Cloudinary AI",
  });
});

app.post("/api/v1/caption", async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({
        success: false,
        message: "Image URL is required",
      });
    }

    const result = await cloudinary.uploader.upload(imageUrl, {
      detection: "captioning",
    });

    res.status(200).json({
      success: true,
      caption: result.info.detection.captioning.data.caption,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to generate image caption",
      error: error.message,
    });
  }
});

const startServer = async () => {
  try {
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.log("Error starting server:", error);
  }
};

startServer();
