"use strict";
let car = {
  make: "Rava4",
  model: "Tesla",
  year: 2020,
  odometer: 157844,
  serviceCount: 30,
  service: function () {
    return this.serviceCount++;
  },
  getOdometerReading: function () {
    return this.odometer;
  },
  reSet: function () {
    let x = (this.odometer = 0);
    let y = (this.serviceCount = 0);
    return x + " " + y;
  },
};
console.log(car.reSet());
console.log(car.odometer);
console.log(car.getOdometerReading());
console.log(car.model);
console.log(car.make);
console.log(car.service());
console.log(car.serviceCount);
