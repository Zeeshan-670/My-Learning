'use strict';

// * 1. New {} is created
// * 2. function is called, this ={}
// * 3. {} linked to prototype
// * 4. function automatically return {}
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never Do this
  // this.calcAge = function () {
  //   console.log(2023 - this.birthYear);
  // };
};

const zeeshan = new Person('Zeeshan', 2000);
const kashan = new Person('kashan', 1998);
const waheed = new Person('waheed', 1948);

console.log(zeeshan instanceof Person);
kashan;
waheed;

// * Prototypes
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
zeeshan.calcAge();
waheed.calcAge();

console.log(zeeshan.__proto__);
console.log(zeeshan.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(zeeshan));
console.log(Person.prototype.isPrototypeOf(waheed));
console.log(Person.prototype.isPrototypeOf(Person));

// * .prototypeOfLinkedObjects

Person.prototype.species = 'Home Sapiens';
console.log(zeeshan.species);
console.log(kashan.species);

console.log(zeeshan.hasOwnProperty('firstName'));
console.log(zeeshan.hasOwnProperty('species'));

console.log(zeeshan.__proto__);
// Object.prototype (top of prototype chain)
console.log(zeeshan.__proto__.__proto__);
console.log(zeeshan.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 1, 2, 5, 1, 2, 3, 4, 5];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(h1);

*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km.h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// ! Class Expression
// const PersonCl = class {};
// ! Class Declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    console.log(2037 - this.birthYear);
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('hey There');
  }
}

const zeeshan = new PersonCl('Zeeshan Muneer', 2000);
console.log(zeeshan);
zeeshan.calcAge();
zeeshan.age;

console.log(zeeshan.__proto__ === PersonCl.prototype);

zeeshan.greet();

// ! 1. Classes are NOT hoisted
// ! 2. Classes are first-class citizens
// ! 3. Classes are executed in strict mode

const account = {
  owner: 'Zeeshan',
  movements: [200, 300, 700, 120],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 1000;
console.log(account.movements);
console.log(account.latest);
