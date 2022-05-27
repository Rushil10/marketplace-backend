import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import testRoute from "./routes/test.js";
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === "production" });

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", testRoute);
app.use("/user", userRoutes);
app.use("/course", courseRoutes);

const CONNECTION_URL = `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@cluster0.7kyv4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });
