import Subject from "../Model/Subject.js";

// Add Subject
export const addSubject = async (req, res) => {
    try {
        const newSubject = new Subject(req.body);
        await newSubject.save();
        res.status(201).json({ success: true, subject: newSubject });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get All Subjects
export const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json({ success: true, subjects });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get Subject By ID
export const getSubjectById = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id);

        if (!subject) {
            return res.status(404).json({
                success: false,
                message: "Subject not found"
            });
        }

        res.status(200).json({ success: true, subject });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update Subject
export const updateSubject = async (req, res) => {
    try {
        const subject = await Subject.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({ success: true, subject });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete Subject
export const deleteSubject = async (req, res) => {
    try {
        await Subject.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Subject deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const subjectController = {
    addSubject,
    getAllSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject
};

export default subjectController;