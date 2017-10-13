const UnitFactory = Prototype.create();
UnitFactory.factory.init = function (instance, args) {

}
UnitFactory.createInfantry = sayNotImplemented;
UnitFactory.createMarinTrooper = sayNotImplemented;
UnitFactory.createPilot = sayNotImplemented;

const SaxUnitFactory = Prototype.extend(UnitFactory);
SaxUnitFactory.createInfantry = () => SaxInfantry.factory.create({});
SaxUnitFactory.createMarinTrooper = () => SaxMarinTrooper.factory.create({});
SaxUnitFactory.createPilot = () => SaxPilot.factory.create({});

const CeltUnitFactory = Prototype.extend(UnitFactory);
CeltUnitFactory.createInfantry = () => CeltInfantry.factory.create({});
CeltUnitFactory.createMarinTrooper = () => CeltMarinTrooper.factory.create({});
CeltUnitFactory.createPilot = () => CeltPilot.factory.create({});