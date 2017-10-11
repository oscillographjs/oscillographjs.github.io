const Trooper = Prototype.extend(Unit);
Trooper.factory.weapons = [
  Knife.factory.create({}),
  Grenade.factory.create({}),
  Riffle.factory.create({}),
];