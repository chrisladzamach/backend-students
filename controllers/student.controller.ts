import { Request, Response } from "express";
import * as StudentRepository from '../repositories/studentRepository';
import { StudentServices } from "../services/studentServices";
import { studentDto } from "../dto/studentDto";

const student = new StudentServices()

export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const students = await student.getAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving students', error });
    }
}

export const getStudentById = async (req: Request, res: Response) : Promise<void> => {
    const id = parseInt(req.params.id);
    try {
        const studentData = await student.getById(id);
        if (!studentData) {
            res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(studentData);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving student', error });
    }
}

export const createStudent = async (req: Request, res: Response) => {
    const studentData: studentDto = req.body;
    try {
        const studentId = await student.create(studentData);
        res.status(201).json({ message: 'Student created successfully', studentId });
    } catch (error) {
        res.status(500).json({ message: 'Error creating student', error });
    }
}