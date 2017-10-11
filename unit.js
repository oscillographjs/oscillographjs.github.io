const Unit = Prototype.create();
Unit.factory.weapons = [
  Knife.factory.create({})
];
Unit.isDead = function () {
  return this.getHP() <= 0;
};
Unit.factory.init = function (instance, args) {
  const weapons = this.weapons.slice();
  const hp = IntRange.factory.create({
    min: 0,
    max: 100,
    initialValue: 100,
  });
  createConstProperty(instance, 'name', args.name);
  instance.getHP = () => hp.getValue();
  instance.getWeapons = () => weapons.slice();
  instance.addWeapon = (item) => weapons.push(item);
  instance.dropAllWeapons = () => weapons.length = 0;
  instance.increaseHP = (number) => hp.increaseValue(number).getValue();
  instance.decreaseHP = (number) => hp.decreaseValue(number).getValue();
};