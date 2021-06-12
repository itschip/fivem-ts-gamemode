import { PlayerSourceMap } from '@server/player';

class _PlayerService {
  constructor(src: number) {
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
}
