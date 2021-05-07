import PlayerDB from "./player.db";
import { PlayerSourceMapProps } from "./player.interface";


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

  PlayerSourceMap.set(pSource, { source: pSource, identifier: playerIdentifier, username });
})

on('playerDropped', () => {
  const pSource = (global as any).source
  PlayerSourceMap.delete(pSource)
})