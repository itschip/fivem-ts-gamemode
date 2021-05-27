// Start coding!
import './admin';
import Weapon from '@server/weapons';
import { weaponComponents } from '@shared/weapons';

RegisterCommand(
  'weapon',
  (src: number, args: string[], raw: string) => {
    Weapon.Give(src, args[0]);

    for (const comp of weaponComponents[args[0]]) {
      Weapon.GiveComponent(src, args[0], comp);
    }
  },
  false,
);

onNet('chip_game:playerKilled', (killer: any, weapon: any) => {
  const pSource = (global as any).source;
  emitNet('chat:addMessage', -1, {
    colr: [255, 0, 0],
    multiline: true,
    args: ['Feed', `${GetPlayerName(killer)} killed ${GetPlayerName(pSource)}`],
  });
  emitNet('chip_game:respawnPlayer', pSource);
});
