const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Create uploads directory if it doesn't exist
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Route to handle file upload
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send("File uploaded successfully.");
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
