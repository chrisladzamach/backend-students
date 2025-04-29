import db from '../config/conecction';
import { ranksDto } from '../dto/ranksDto';

export class ranksRepository {
    getAllRanks = async () => {
        const [rows] = await db.query('SELECT * FROM ranks');
        return rows;
    }

    getRankById = async (id: number) => {
        const [rows]:any = await db.query('SELECT * FROM ranks WHERE id = ?', id);
        return rows[0];
    }

    createRank = async (rank: ranksDto) => {
        const { rank_name } = rank;
        const [result]: any = await db.query('INSERT INTO ranks (rank_name) VALUES (?)', [rank_name]);
        return result.insertId;
    }

    deleteRank = async (id: number) => {
        const [rows] = await db.query('DELETE FROM ranks WHERE id = ?', id);
        return rows;
    }
}