import db from '../config/conecction';
import { studentDto } from '../dto/studentDto';

export class StudentRepository {
    getAllStudents = async () => {
        const [rows] = await db.query('SELECT * FROM student');
        return rows;
    }

    getStudentById = async (id: number) => {
        const [rows]:any = await db.query('SELECT * FROM student WHERE id = ?', [id]);
        return rows[0];
    }

    createStudent = async (student: studentDto) => {
        const {full_name,id_type,id_number,birth_date,birth_country,birth_state, birth_city,phone_number,registration_year,is_active,grade_id, rank_id,residence_country, residence_state,residence_city,residence_neighborhood,residence_address,observations} = student;
        const [result]: any = await db.query('INSERT INTO student (full_name,id_type,id_number,birth_date,birth_country,birth_state, birth_city,phone_number,registration_year,is_active,grade_id, rank_id,residence_country, residence_state,residence_city,residence_neighborhood,residence_address,observations) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [full_name,id_type,id_number,birth_date,birth_country,birth_state, birth_city,phone_number,registration_year,is_active,grade_id, rank_id,residence_country, residence_state,residence_city,residence_neighborhood,residence_address,observations]);
        return result.insertId;
    }
}
