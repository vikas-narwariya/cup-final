import Comment from "../models/comment.js";
export const postcomment = async (req, res) => {
  const { name, title, comments, result } = req.body;

  try {
    if (!name || !title || !comments || !result) {
      return res.status(422).json({ error: "Fillup " });
    } else {
      const comment = new Comment({
        name,
        title,
        comments,
        result,
      });

      await comment.save();
      res.status(201).json({ message: "Checked !" });
    }
  } catch (err) {
    console.log(err);
  }
};
export const getcomment = async (req, res) => {
  Comment.find()
    .then((result) => {
      res.status(200).json({
        commentData: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};