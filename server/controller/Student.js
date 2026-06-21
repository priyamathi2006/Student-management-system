import Student from "../model/Student.js";

// 1. CREATE A NEW STUDENT
export const createStudent = async (req, res) => {
    try {
        const { name, email, phone, course, year } = req.body;

        // Check if student email already exists
        const emailExist = await Student.findOne({ email });
        if (emailExist) {
            return res.status(400).json({
                message: "Student already exists"
            });
        }

        // Save to database
        const student = await Student.create({
            name,
            email,
            phone,
            course,
            year
        });

        return res.status(201).json({
            message: "Student created successfully",
            student
        });

    } catch (err) {
        console.error("Error creating student:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

// 2. GET ALL STUDENTS
export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });
        return res.status(200).json({ students });
    } catch (err) {
        console.error("Error getting all students:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

// 3. GET ONE SINGLE STUDENT
export const getOneStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        return res.status(200).json({ student });
    } catch (err) {
        console.error("Error getting student:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

// 4. UPDATE A STUDENT
export const updateOneStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.status(200).json({ student });
    } catch (err) {
        console.error("Error updating student:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

// 5. DELETE A STUDENT
export const deleteOneStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        return res.status(200).json({
            message: "Student deleted successfully",
            student
        });
    } catch (err) {
        console.error("Error deleting student:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};