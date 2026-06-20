import express from "express";
import { 
    createStudent, 
    getAllStudents, 
    getOneStudent, 
    updateOneStudent, 
    deleteOneStudent 
} from "../controller/student.js"; // Crucial: Lowercase 's' to match your controller folder file!

const router = express.Router();

// Routes for handling collections
router
    .route("/")
    .post(createStudent)
    .get(getAllStudents);

// Routes for handling a specific student by ID
router
    .route("/:id")
    .get(getOneStudent)
    .put(updateOneStudent)
    .delete(deleteOneStudent);

export default router;