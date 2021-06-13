import { PlayerSourceMap } from '@server/player';

class _PlayerService {
  constructor() {
    console.log('Player Service started!');
  }

  getName(source: number) {
    return PlayerSourceMap.get(source).username;
  }

  getIdentifier(source: number) {
    return PlayerSourceMap.get(source).identifier;
  }

  getLevel(source: number) {
    return PlayerSourceMap.get(source).level;
  }

  getPing(source: number): number {
    return 10;
  }
}

const PlayerService = new _PlayerService();

export default PlayerService;
