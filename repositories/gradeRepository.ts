import db from '../config/conecction';
import { gradeDto } from '../dto/gradeDto';

export class GradeRepository {
    getAllGrades = async () => {
        const [grades] = await db.query('SELECT * FROM grades');
        return grades;
    }

    getAllGradesById = async (id: number) => {
        const [grades]:any = await db.query('SELECT * FROM grades WHERE id = ?', id);
        return grades[0];
    }
}