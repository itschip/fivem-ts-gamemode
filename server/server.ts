// Start coding!
import './admin'
import Weapon from '@server/weapons';


RegisterCommand(
  'weapon',
  (src: number, args: string[], raw: string) => {
    Weapon.Give(src, args[0]);

    for (const comp of weaponComps[args[0]]) {
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

const weaponComps: any = {
  WEAPON_PISTOL: [
    'COMPONENT_AT_PI_FLSH',
    'COMPONENT_PISTOL_CLIP_02',
    'COMPONENT_AT_PI_SUPP_02',
    'COMPONENT_PISTOL_VARMOD_LUXE',
  ],
  WEAPON_CARBINERIFLE: [
    'COMPONENT_CARBINERIFLE_CLIP_03',
    '	COMPONENT_AT_AR_FLSH',
    'COMPONENT_AT_SCOPE_MEDIUM',
    'COMPONENT_AT_AR_SUPP',
    'COMPONENT_AT_AR_AFGRIP',
    'COMPONENT_CARBINERIFLE_VARMOD_LUXE',
  ],
};
