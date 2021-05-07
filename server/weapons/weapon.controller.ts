export class _Weapon {

  Give(src: number, weaponName: string) {
    GiveWeaponToPed(GetPlayerPed(src.toString()), GetHashKey(weaponName), 250, false, true);
  }
}

const Weapon = new _Weapon();

export default Weapon;