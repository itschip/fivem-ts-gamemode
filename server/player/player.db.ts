import { db } from "@server/db";

class _PlayerDB {

  async createPlayer(identifier: string, username: string, level = 0) {
    const query = `INSERT INTO users (identifier, username, level) VALUES (?, ?, ?)`;
    db.query(query, [identifier, username, level])
  }
}


const PlayerDB = new _PlayerDB();

export default PlayerDB;