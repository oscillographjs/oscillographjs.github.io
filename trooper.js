const Trooper = Prototype.extend(Unit);
Trooper.factory.weapons = [
  Knife,
  Grenade,
  Riffle,
];
const MarinTrooper = Prototype.extend(Trooper);
MarinTrooper.factory.weapons = [
  Knife,
  Axe,
  Riffle,
];
MarinTrooper.factory.hp.min = 0;
MarinTrooper.factory.hp.max = 250;
MarinTrooper.factory.hp.initialValue = 245;

const Infantry = Prototype.extend(Trooper);
Infantry.factory.weapons = [
  Knife,
  Grenade
];
