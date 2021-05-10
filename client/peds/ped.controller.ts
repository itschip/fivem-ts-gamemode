import Fivem from "@utils/fivem";

export class _Ped {

  /**
   * 
   * @param model The hash of the ped
   */
  async Create(model: any, coords: number[], heading: number): Promise<number> {
    RequestModel(model)
    while (!HasModelLoaded(model)) {
      await Fivem.Delay(1)
    }
  
    const handle = CreatePed(4, model, coords[0], coords[1], coords[2], heading, true, false);
    //SetEntityAsNoLongerNeeded(handle);
    return handle;
  }
}

const Ped = new _Ped();

export default Ped;