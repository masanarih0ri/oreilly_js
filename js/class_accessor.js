class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'D', 'N', 'R'];
    this._userGear = this._userGears[0];
  }
  get userGear() {
    return this._userGear;
  }
  set userGear(value) {
    if(this._userGears.indexOf(value) < 0) {
      throw new Error(`ギア指定が正しくない:${value}`);
    }
    return this._userGear = value;
  }
  shift(gear) {
    return this._userGear = gear;
  }
}

const car1 = new Car('tesla', 'model s');
const car2 = new Car('mazda', '3i');

console.log(car1, car2);

car1.shift('D');
car2.shift('R');

console.log(car1.userGear, car2.userGear);

car1.userGear = 'X';
console.log(car1.userGear);
