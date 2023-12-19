import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if the database connection is successful
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to the MongoDB database");
});

// Create a schema for the message
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a schema for the project
const projectSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  description: String,
  tags: [String],
  url: String,
});

// Create a model based on the schema for the "personalPortfolio.projects" collection
const Project = mongoose.model("Project", projectSchema, "projects");

// Create a model based on the schema for the "personalPortfolio.messages" collection
// const Message = mongoose.model("Message", messageSchema, "messages");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API endpoint for retrieving messages
// app.get("/api/messages", async (req, res) => {
//   try {
//     // Retrieve all messages from the "personalPortfolio.messages" collection
//     const messagesData = await Message.find();

//     // Send the messages as the response
//     res.json({ messagesData });
//   } catch (error) {
//     console.error("Error retrieving messages:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// API endpoint for retrieving projects
app.get("/api/projects", async (req, res) => {
  try {
    // Retrieve all projects from the "personalPortfolio.projects" collection
    const projectsData = await Project.find();

    console.log(projectsData);
    // Send the projects as the response
    res.json({ projectsData });
  } catch (error) {
    console.error("Error retrieving projects:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
