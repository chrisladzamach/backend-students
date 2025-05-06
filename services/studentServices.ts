import { StudentRepository } from "../repositories/studentRepository";
import { studentDto } from "../dto/studentDto";

const studentRepository = new StudentRepository();

export  class StudentServices {
    getAll(){
        return studentRepository.getAllStudents();
    }

    getById(id: number){
        return studentRepository.getStudentById(id);
    }

    create(student: studentDto){
        return studentRepository.createStudent(student);
    }
}