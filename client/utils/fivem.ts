export class _Fivem {
  Delay(ms: number) {
    return new Promise((res) => setTimeout(res, ms))
  }

  clearArea(radius: number) {
    const [x, y, z] = GetEntityCoords(PlayerPedId(), false);
    ClearArea(x, y, z, radius, true, false, false, false);
  }
}

const Fivem = new _Fivem();

export default Fivem;
