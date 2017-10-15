const Point2D = Prototype.create();
Point2D.factory.init = function (instance, args) {
  let {x, y} = args;
  createConstProperty(instance, "x", intVal(x));
  createConstProperty(instance, "y", intVal(y));
}
Point2D.findDinstace = function (anotherPoint) {
  if (Object.getPrototypeOf(anotherPoint) !== Point2D) {
    throw Error('The argument is not a Point2D instance');
  }
  const a = this;
  const b = anotherPoint;
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
}
