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
MarinTrooper.factory.init = function (instance, args) {
  Trooper.factory.init(instance, args);
  const marinHp = IntRange.factory.create({
    min: 0,
    max: 250,
    initialValue: 200,
  });
  instance.getHP = () => marinHp.getValue();
  instance.increaseHP = (number) => marinHp.increaseValue(number).getValue();
  instance.decreaseHP = (number) => marinHp.decreaseValue(number).getValue();
}