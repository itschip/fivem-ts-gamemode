import { db } from '@server/db';

export class _PlayerDB {
  async createPlayer(identifier: string, username: string, level = 0) {
    const query = `INSERT INTO users (identifier, username, level) VALUES (?, ?, ?)`;
    db.query(query, [identifier, username, level]);
  }

  async getGameTime(identifier: string) {
    const query = `SELECT game_time FROM players WHERE identifier = ?`;
    db.query(query, [identifier]);
  }
}

const PlayerDB = new _PlayerDB();

export default PlayerDB;
