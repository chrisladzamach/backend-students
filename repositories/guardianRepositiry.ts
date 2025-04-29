import db from '../config/conecction';
import { guardianDTO } from '../dto/guardianDto';

export class GuardianRepository {
    getAllGuardians = async () => {
        const [rows] = await db.query('SELECT * FROM guardians');
        return rows;
    }
    getGuardianById = async (id: number) => {
        const [rows]:any = await db.query('SELECT * FROM guardians WHERE id = ?', id);
        return rows[0];
    }
    createGuardian = async (guardian: guardianDTO) => {
        const {student_id,full_name, id_number, phone_number} = guardian;
        const [result]: any = await db.query('INSERT INTO guardians (student_id,full_name, id_number, phone_number) VALUES (?,?,?,?)', [student_id,full_name, id_number, phone_number]);
        return result.insertId;
        
    }
    deleteGuardian = async (id: number) => {
        const [rows] = await db.query('DELETE FROM guardians WHERE id = ?', id);
        return rows;
    }
}