import express from 'express';
const router = express.Router();

// Import Subject Controller
import subjectController from '../controller/Subject.js';

// Subject Routes
router.post('/', subjectController.addSubject);
router.get('/', subjectController.getAllSubjects);
router.get('/:id', subjectController.getSubjectById);
router.put('/:id', subjectController.updateSubject);
router.delete('/:id', subjectController.deleteSubject);

export default router;