const Weapon = Prototype.create();
Weapon.factory.init = function (instance, args) {
};
const Grenade = Prototype.extend(Weapon);
Grenade.factory.init = function(instance, args) {
  const {model} = args;
  createConstProperty(instance, 'model', model);
  createConstProperty(instance, 'isReusable', false);
};
const FireGrenade = Prototype.extend(Grenade);
FireGrenade.factory.init = function (instance, args) {
  Grenade.factory.init(instance, args);
};