import mongoose from "mongoose";

const assignmentSchema = mongoose.Schema({
  name: String, 
  title: String, 
  githublink: String, 
  hostedlink: String, 
  videolink: String, 
  comments:  [String], default: [] ,
    submittedAt: {
        type: Date,
        default: new Date(),
    },
});

export default mongoose.model("UploadAssignment", assignmentSchema);