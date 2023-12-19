// // index.js

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb+srv://mghaffarbese21seecs:yasir0027@reactportfoliodb.ggjqelh.mongodb.net/?retryWrites=true&w=majority', 
// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const projectSchema = new mongoose.Schema({
//   imgPath: String,
//   title: String,
//   description: String,
//   ghLink: String,
//   demoLink: String,
// });

// const Project = mongoose.model('yasir_project', projectSchema);

// app.get('/projects', async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.json(projects);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });