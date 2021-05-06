class _PlayerDB {

  async createPlayer(identifier: string, username: string, level = 0) {
    const query = `INSERT INTO users (identifier, username, level) VALUES (?, ?, ?)`;
    // actaully exectute the query
  }
}


const PlayerDB = new _PlayerDB();

export default PlayerDB;