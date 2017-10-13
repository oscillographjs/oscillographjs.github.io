const SaxInfantry = Prototype.extend(Infantry);
SaxInfantry.factory.init = function (instance, args) {
  Infantry.factory.init(instance, args);
  SaxArmy.factory.init(instance, args);
}

const CeltInfantry = Prototype.extend(Infantry);
CeltInfantry.factory.init = function (instance, args) {
  Infantry.factory.init(instance, args);
  CeltArmy.factory.init(instance, args);
}

const SaxMarinTrooper = Prototype.extend(MarinTrooper);
SaxMarinTrooper.factory.hp.max = 280;
SaxMarinTrooper.factory.init = function (instance, args) {
  MarinTrooper.factory.init(instance, args);
  SaxArmy.factory.init(instance, args);
}

const CeltMarinTrooper = Prototype.extend(MarinTrooper);
CeltMarinTrooper.factory.hp.max = 300;
CeltMarinTrooper.factory.init = function (instance, args) {
  MarinTrooper.factory.init(instance, args);
  CeltArmy.factory.init(instance, args);
}
