// this is prototype

class _PlayerService {
  constructor() {
    console.log('Player class started')
  }

  async getLevel(): Promise<number> {
    const query = `SELECT level FROM users WHERE username = ?`
    return 1;
  }

  async setLevel(level: number): Promise<void> {
    const query = `UPDATE users SET level = ? WHERE username = ?`
  }

  async updateLevel(level: number): Promise<void> {
    const currentLevel = await this.getLevel();
    const newLevel = currentLevel + level;
  }
}
