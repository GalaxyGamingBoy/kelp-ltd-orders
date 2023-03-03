import mysql from 'mysql2/promise';
import SQLQuery from '../types/SQLQuery';

export default class DBManager {
    static sendQuery = async (query: SQLQuery) => {
        const dbConnection = await mysql.createConnection(String(process.env.DATABASE_URL));
        const [rows] = await dbConnection.execute(query.query);
        dbConnection.end();
        return rows;
    }
}