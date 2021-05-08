import { db } from "@server/db";
import { PlayerSourceMap } from "@server/player";

export class _Account{

  async giveMoney(src: number, amount: number) {
    const player = PlayerSourceMap.get(src);
    try {
      db.query(`UPDATE users SET money = ? WHERE username = ?`, [amount, player.username])
    } catch (error) {
      
    }
  }

  async getMoney(src: number) {
    const player = PlayerSourceMap.get(src);
  }
}

const Account = new _Account();

export default Account;