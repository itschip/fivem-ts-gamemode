import mysql from 'mysql2';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  port: parseInt(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME || 'gamemode',
});

export const db = pool.promise();