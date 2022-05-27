import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const courseSchema = {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  demo_video: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  user_id: {
    type: ObjectId,
    required: true,
  },
};

const course = mongoose.model("course", courseSchema);

export default course;
