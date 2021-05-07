export class _Vehicle {

  async Create(model: string, x: number, y: number, z: number, heading: number) {
    const vehicle = CreateVehicle(GetHashKey(model), x, y, z, heading, false, false);
    return vehicle;
  }
}

const Vehicle = new _Vehicle();

export default Vehicle;