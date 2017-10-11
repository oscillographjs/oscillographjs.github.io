const intVal = (val) => {
  if (!Number.isInteger(parseInt(val, 10))) {
    throw Error('Non-integer value');
  }
  return parseInt(val, 10);
}
const createConstProperty = (instance, propertyName, value) => {
  Object.defineProperty(instance, propertyName, {
    value: value,
  });
}