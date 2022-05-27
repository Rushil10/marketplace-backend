import course from "../models/course.js";

export const addCourse = async (req, res) => {
  const body = req.body;
  const newCourse = new course(body);
  try {
    await newCourse.save();
    var newCourseData = {
      message: "Course Created !",
    };
    console.log(newCourseData);
    res.status(201).json(newCourseData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
