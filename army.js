const Army = Prototype.create();
Army.color = null;
Army.factory.init = function (instance, args) {
  instance.color = this.Prototype.color;
};

const SaxArmy = Prototype.extend(Army);
SaxArmy.color = "blue";
const CeltArmy = Prototype.extend(Army);
CeltArmy.color = "red";
