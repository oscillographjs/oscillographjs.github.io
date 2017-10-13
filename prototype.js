const Prototype = (function(){

  const copyPrototypeFactoryKeys = function(newPrototype, prototype) {
    const prototypeKeys = Object.getOwnPropertyNames(prototype.factory);
    prototypeKeys.forEach((key) => {
      if (['create', 'init', 'Prototype'].indexOf(key) >= 0) return;
      if (typeof prototype.factory[key] !== "object") return;

      newPrototype.factory[key] = Object.create(prototype.factory[key]);
      const keySubkeys = Object.getOwnPropertyNames(prototype.factory[key]);
      keySubkeys.forEach((subKey) => {
        let copiedValue;
        if (typeof prototype.factory[key][subKey] === "object") {
          copiedValue = Object.create(prototype.factory[key][subKey]);
        } else {
          copiedValue = prototype.factory[key][subKey];
        }
        newPrototype.factory[key][subKey] = copiedValue;
      });
    });
  }

  const initPrototypeFactory = () => {
    const Proto = Object.create(null);
    Proto.factory = Object.create(null);
    //To prevent adding "hasOwnProperty" and another "Object" properties.
    Proto.factory.Prototype = Proto;
    //"factory.create" will be inherited by all prototypes of Proto object.
    Proto.factory.create = function createAbstractInstance(args) {
      const instance = Object.create(this.Prototype);
      Object.defineProperty(instance, 'factory', {
        value: null,
      });
      //to prevent new instances to do prototype things.
      this.init(instance, args);

      return instance;
    };
    Proto.factory.init = function throwErrorOnProtoFactoryInitCall() {
      throw Error('"init()" method must be implemented!');
    };

    const prototypeFactory = (prototype = Proto) => {
      const newPrototype = Object.create(prototype);
      newPrototype.factory = Object.create(prototype.factory);
      copyPrototypeFactoryKeys(newPrototype, prototype);
      newPrototype.factory.Prototype = newPrototype;

      return newPrototype;
    };

    return prototypeFactory;
  };


  return {
    create: initPrototypeFactory(), 
    extend: (prototype) => Prototype.create(prototype),
  };

}());