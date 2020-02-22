class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.userGears = ['P', 'M', 'R', 'D'];
    this.userGear = this.userGears[0];
  }
  shift(gear) {
    if(this.userGears.indexOf(gear) < 0) {
      throw new Error(`ギア指定が正しくない: ${gear}`);
    }
    this.userGear = gear;
  }
}

const car1 = new Car('tesla', 'model s');
const car2 = new Car('mazda', '3i');

console.log(car1, car2);

car1.shift('D');
car2.shift('R');

console.log(car1.userGear);
console.log(car2.userGear);