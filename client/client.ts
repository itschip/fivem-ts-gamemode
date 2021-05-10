import Ped from '@client/peds';
import Vehicle from '@client/vehicles';
import Fivem from '@utils/fivem';

const exp = (global as any).exports;

RegisterCommand(
  'car',
  async (src: number, args: string[], raw: string) => {
    console.log('hello');
    const [x, y, z] = GetEntityCoords(PlayerPedId(), true);
    const ped = PlayerPedId();
    const veh = await Vehicle.Create(
      true,
      ped,
      args[0],
      x,
      y,
      z,
      GetEntityHeading(PlayerPedId()),
    );
    console.log(veh);
  },
  false,
);

RegisterCommand(
  'dv',
  (src: number, args: string[], raw: string) => {
    Fivem.clearArea(parseInt(args[0]));
  },
  false,
);

ClearPlayerWantedLevel(PlayerPedId());
SetMaxWantedLevel(0);

SetCanAttackFriendly(PlayerPedId(), true, false);
NetworkSetFriendlyFireOption(true);

RegisterCommand(
  'coords',
  (src: number, args: string[], raw: string) => {
    console.log(GetEntityCoords(PlayerPedId(), true));
  },
  false,
);

onNet('chip_game:respawnPlayer', () => {
  exp['spawnmanager'].spawnPlayer({
    x: -1162.49,
    y: -2977.33,
    z: 13.94,
    heading: 200.0,
    skidFade: true,
  });
});

exp['spawnmanager'].spawnPlayer({
  x: -1162.49,
  y: -2977.33,
  z: 13.94,
  heading: 200.0,
  skidFade: true,
});

on('baseevents:onPlayerKilled', (killerId: any, deathData: any[]) => {
  console.log(killerId);
  emitNet('chip_game:playerKilled', killerId, deathData[1]);
});

RegisterCommand(
  'weather',
  (src: number, args: string[], raw: string) => {
    NetworkOverrideClockTime(parseInt(args[0]), 0, 0);
    SetOverrideWeather(args[1]);
  },
  false,
);

RegisterCommand(
  'chase',
  async (src: number, args: string[], raw: string) => {
    const pilotModel = GetHashKey('s_m_m_pilot_02');
    const coords = [-1124.74, -3036.89, 14.78];
    const pilot = await Ped.Create(pilotModel, coords, 100);
    const ped = PlayerPedId();

    TaskCombatPed(pilot, ped, 0, 16);

    SetPedCombatAbility(pilot, 2);
    SetPedCombatAttributes(pilot, 0, true);
    SetPedCombatAttributes(pilot, 2, true);
    SetPedCombatAttributes(pilot, 3, true);
    SetPedCombatAttributes(pilot, 5, true);
    SetPedCombatAttributes(pilot, 20, true);
    SetPedCombatAttributes(pilot, 46, true);
    SetPedCombatAttributes(pilot, 52, true);

    SetPedCombatMovement(pilot, 3);

    SetRunSprintMultiplierForPlayer(PlayerPedId(), 1.2);
  },
  false,
);

RegisterCommand(
  'lightoff',
  () => {
    SetArtificialLightsState(true);
  },
  false,
);

RegisterCommand(
  'lighton',
  () => {
    SetArtificialLightsState(false);
  },
  false,
);
