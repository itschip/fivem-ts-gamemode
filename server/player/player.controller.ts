import PlayerDB from './player.db';
import { PlayerSourceMapProps } from './player.interface';
import Account, { _Account } from '@server/account';

export const PlayerSourceMap = new Map<number, PlayerSourceMapProps>();

on('playerJoining', () => {
  const pSource = (global as any).source;
  const username = GetPlayerName(pSource);

  // get identifier
  const identifiers = getPlayerIdentifiers(pSource);
  let playerIdentifier = null;

  for (const identifier of identifiers) {
    if (identifier.includes('license:')) {
      playerIdentifier = identifier.split(':')[1];
    }
  }

  PlayerDB.createPlayer(playerIdentifier, username, 0);

  PlayerSourceMap.set(pSource, {
    source: pSource,
    identifier: playerIdentifier,
    username,
    level: 0,
  });
});

on('playerDropped', () => {
  const pSource = (global as any).source;
  PlayerSourceMap.delete(pSource);
});

class _Player {
  public account: _Account;

  constructor() {
    this.account = Account;
  }
}

const Player = new _Player();

export default Player;
