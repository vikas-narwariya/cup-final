import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  name:   String, 
  title:  String, 
  comments : String, 
  result: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Comment", commentSchema);