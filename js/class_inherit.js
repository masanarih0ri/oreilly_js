class Vehicle {
  constructor() {
    // 乗客
    this.passengers = [];
    console.log('vehicleが生成された');
  }
  addPassenger(p) {
    this.passengers.push(p);
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    console.log('carが生成された');
  }
  deployAirBags() {
    console.log('airbagが動作しました');
  }
}

const v = new Vehicle();
v.addPassenger("masanari");
v.addPassenger('karin');

console.log(v.passengers);

const c = new Car();
c.addPassenger('hoge');
c.addPassenger('fuga');

console.log(c.passengers);

c.deployAirBags();
// 継承は親から子にしかできないので、vehicleからcarへのメソッドへはアクセス不可
v.deployAirBags();
