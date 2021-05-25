import { PlayerSourceMap } from '@server/player';

class _PlayerService {
  private readonly _source: number

  constructor(src: number) {
    console.log('Player Service started!');
    this._source = src;
  }

  public getName() {
    return PlayerSourceMap.get(this._source).username
  }

  public getIdentifier() {
    return PlayerSourceMap.get(this._source).identifier;
  }

}