const IntRange = Prototype.create();
IntRange.factory.init = function (instance, args) {
  const {min, max, initialValue} = args;
  let value = 0;
  if (!!initialValue) {
    value = initialValue;
  }
  createConstProperty(instance, 'MIN', min);
  createConstProperty(instance, 'MAX', max);
  createConstProperty(instance, 'getValue', () => value);
  const setValue = (newValue) => {
    if (intVal(newValue) > max || intVal(newValue) < min) {
      throw Error('Invalid value' +": "+ newValue);
    }
    value = newValue;
    return instance;
  };
  createConstProperty(instance, 'setValue', setValue);
};
IntRange.increaseValue = function (number) {
  if ((intVal(number) + this.getValue()) >= this.MAX) {
    this.setValue(this.MAX);
  } else {
    this.setValue(this.getValue() + intVal(number));
  }
  return this;
}
IntRange.decreaseValue = function (number) {
  if (this.getValue() - intVal(number) <= this.MIN) {
    this.setValue(this.MIN);
  } else {
    this.setValue(this.getValue() - intVal(number));
  }
  return this;
}
IntRange.changeValue = function(number) {
  if (number >= 0) {
    this.increaseValue(number);
  } else {
    this.decreaseValue(Math.abs(number));
  }
}