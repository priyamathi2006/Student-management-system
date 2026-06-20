import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student Name is Required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Phone Number is Required"],
      trim: true,
    },

    course: {
      type: String,
      required: [true, "Course is Required"],
      trim: true,
    },

    year: {
      type: Number,
      required: [true, "Year is Required"],
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;