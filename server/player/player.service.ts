import { PlayerSourceMap } from '@server/player';

class _PlayerService {

  constructor(src: number) {
    console.log('Player Service started!');
  }

  public getName(source: number) {
    return PlayerSourceMap.get(source).username
  }

  public getIdentifier(source: number) {
    return PlayerSourceMap.get(source).identifier;
  }

}