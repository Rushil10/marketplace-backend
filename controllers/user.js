import user from "../models/user.js";
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === "production" });
import jwt from "jsonwebtoken";

export const addUser = async (req, res) => {
  const body = req.body;
  const newUser = new user(body);
  try {
    const userData = await user.find({ metamask_id: req.body.metamask_id });
    if (userData.length > 0) {
      const token = jwt.sign(
        userData[0].toJSON(),
        process.env.ACCESS_TOKEN_SECRET
      );
      console.log(token);
      var userDetails = {
        token,
      };
      res.status(201).json(userDetails);
    } else {
      await newUser.save();
      const token = jwt.sign(newUser.toJSON(), process.env.ACCESS_TOKEN_SECRET);
      console.log("newUser");
      console.log(token);
      var newUserData = {
        token,
      };
      console.log(newUserData);
      res.status(201).json(newUserData);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
