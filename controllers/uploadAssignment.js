// import express from 'express';
// import mongoose from 'mongoose';

// import UploadMessage from '../models/uploadMessage.js';

// const router = express.Router();

// export const createUpload = async (req, res) => {
//     const upload = req.body;

//     const newUploadMessage = new UploadMessage({ ...upload, creator: req.userId, submittedAt: new Date().toISOString() })

//     try {
//         await newUploadMessage.save();

//         res.status(201).json(newUploadMessage);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }

// export const updateUpload = async (req, res) => {
//     const { id } = req.params;
//     const { name, subject, github, hosted, video, selectedFile } = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const updatedUpload = { name, subject, github, hosted, video, selectedFile, _id: id };

//     await UploadMessage.findByIdAndUpdate(id, updatedUpload, { new: true });

//     res.json(updatedUpload);
// }

// export const commentUpload = async (req, res) => {
//     const { id } = req.params;
//     const { value } = req.body;

//     const upload = await UploadMessage.findById(id);

//     upload.comments.push(value);

//     const updatedUpload = await UploadMessage.findByIdAndUpdate(id, upload, { new: true });

//     res.json(updatedUpload);
// };

// export default router;


import Assignment from "../models/uploadMessage.js";
// const secret = "test";
export const assignment = async (req, res) => {
  const { name, title, githublink, hostedlink, videolink} = req.body;

  try {
    if (!name || !title || !githublink || !hostedlink || !videolink ) {
      return res.status(422).json({ error: "Fill all the inputs" });
    } else {
      const assigment = new Assignment({
        name,
        title,
        githublink,
        hostedlink,
        videolink,
        // comments
      });

      await assigment.save();
      res.status(201).json({ message: "Got Done with assignments. !" });
    }
  } catch (err) {
    console.log(err);
  }
};

export const commentassignment = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const assignment = await Assignment.findById(id);

    assignment.comments.push(value);

    const updatedAssignment = await Assignment.findByIdAndUpdate(id, assignment, { new: true });

    res.json(updatedAssignment);
};


export const getassignment = async (req, res) => {
  Assignment.find()
    .then((result) => {
      res.status(200).json({
        assignmentData: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
