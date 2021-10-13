
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";
import teacherRouter from "./routes/teacher.js";
import uploadRoutes from "./routes/uploads.js";
import commentRouter from "./routes/comment.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/teacher", teacherRouter);
app.use('/uploads', uploadRoutes);
app.use("/comment", commentRouter);


const CONNECTION_URL = 'mongodb+srv://vikas:vikas123@cluster0.9uhp0.mongodb.net/cup6?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
} 

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);



