import PlayerDB, { _PlayerDB } from './player.db';
import PlayerService from './player.service';

export class _PlayerStats {
  private readonly playerDB: _PlayerDB;

  constructor() {
    this.playerDB = PlayerDB;
    console.log('Player stats initialize');
  }

  getGameTime(source: number) {
    const identifier = PlayerService.getIdentifier(source);
    return this.playerDB.getGameTime(identifier);
  }
}

const PlayerStats = new _PlayerStats();

export default PlayerStats;
