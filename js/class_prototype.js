class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.userGears = ['P', 'N', 'R', 'D'];
    this.userGear = this.userGears[0];
  }
  shift(gear) {
    if(this.userGears.indexOf(gear) < 0) {
      throw new Error(`ギア指定が正しくない: ${gear}`);
    }
    this.userGear = gear;
  }
}

const car1 = new Car();
const car2 = new Car();
console.log(car1.shift === Car.prototype.shift);
console.log(car1.shift === car2.shift);

// car1.shift('D');
// // car1.shift('d'); //これはエラー
// console.log(car1.userGear);

car1.shift = function(gear) {
  this.userGear = gear.toUpperCase();
}
console.log(car1.shift === Car.prototype.shift);
console.log(car1.shift === car2.shift);
car1.shift('d');
console.log(car1.userGear);

car2.shift('D');
// car2.shift('d');