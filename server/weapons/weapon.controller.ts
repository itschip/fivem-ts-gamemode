export class _Weapon {

  Give(src: number, weaponName: string) {
    GiveWeaponToPed(GetPlayerPed(src.toString()), GetHashKey(weaponName), 250, false, true);
  }

  GiveComponent(src: number, weapon: string, attachment: string) {
    console.log("selected gun: ", GetSelectedPedWeapon(GetPlayerPed(src.toString())))
    GiveWeaponComponentToPed(GetPlayerPed(src.toString()), GetHashKey(weapon), GetHashKey(attachment));
  }
}

const Weapon = new _Weapon();

export default Weapon;