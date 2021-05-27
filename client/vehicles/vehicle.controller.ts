import Fivem from '@utils/fivem';

export class _Vehicle {
  async Create(
    spawnInCar: boolean,
    ped: any,
    model: string,
    x: number,
    y: number,
    z: number,
    heading: number,
  ) {
    RequestModel(GetHashKey(model));
    while (!HasModelLoaded(GetHashKey(model))) {
      await Fivem.Delay(1);
    }

    console.log(model, x, y, z, heading);
    const vehicle = CreateVehicle(GetHashKey(model), x, y, z, heading, true, true);

    if (spawnInCar) {
      TaskWarpPedIntoVehicle(ped, vehicle, -1);
    }
    SetVehicleAsNoLongerNeeded(vehicle);

    return vehicle;
  }
}

const Vehicle = new _Vehicle();

export default Vehicle;
