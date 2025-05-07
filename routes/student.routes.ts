import { Router } from "express";
import {getAllStudents, getStudentById, createStudent} from "../controllers/student.controller";

const router = Router();

router.get("/student", getAllStudents);
router.get("/student/:id", getStudentById);
router.post("/student", createStudent);

export default router;