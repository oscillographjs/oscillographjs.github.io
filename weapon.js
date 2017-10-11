const Weapon = Prototype.create();
Weapon.factory.init = function (instance, args) {
  createConstProperty(instance, 'name', args.name);
  createConstProperty(instance, 'model', args.model);
};
const Grenade = Prototype.extend(Weapon);
Grenade.factory.init = function (instance, args) {
  Weapon.factory.init(instance, args);
  let hasBeenUsed = false;
  createConstProperty(instance, 'isReusable', false);
  instance.use = () => hasBeenUsed = true;
};
const Knife = Prototype.extend(Weapon);
const Riffle = Prototype.extend(Weapon);
Riffle.factory.init = function (instance, args) {
  Weapon.factory.init(instance, args);
  let clipSize = 30;
  const reloadingTime = 2; //seconds
  createConstProperty(instance, 'isReusable', true);
  instance.getClipSize = () => clipSize;
};