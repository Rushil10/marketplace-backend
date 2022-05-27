import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const userSchema = {
  metamask_id: {
    type: String,
    required: true,
  },
  courses: {
    type: Array,
    default: [],
  },
};

const user = mongoose.model("user", userSchema);

export default user;
