//@ts-check
/*
// Basic 1

class Persone {
  name: string;
  age: number;
  jobTitle: string;
  constructor(name, age, jobTitle) {
    this.name = name;
    this.age = age;
    this.jobTitle = jobTitle;
  }
  hello() {
    return `Hello, my name is ${this.name} and i'm ${this.age} years old, my Job-definition is ${this.jobTitle}`;
  }
}

var person1 = new Persone("Bernhard", 44, "WebStackDeveloper");
var person2 = new Persone("Nikos", 39, "Frontend Developer");

console.log(person1.hello());
console.log(person2.hello());

// Basic 2

interface person {
  name: string;
  age: number;
  jobTitle: string;
  salary?: number;
  jobLocation?: string;
  printString: Function;
}

class Person {
  constructor(
    public name: string,
    public age: number,
    public jobTitle: string
  ) {}
  printString() {
    console.log(
      `Hello there, My name is ${this.name} I am ${this.age} year old, I am a ${this.jobTitle}`
    );
    return `<p>Hello there, My name is ${this.name} I am ${this.age} year old, I am a ${this.jobTitle}`;
  }
  closingP() {
    return `.</p>`;
  }
}

class Salary extends Person {
  salary: number;
  jobLocation: string;
  constructor(
    name: string,
    age: number,
    jobTitle: string,
    salary: number,
    jobLocation: string
  ) {
    super(name, age, jobTitle);
    this.salary = salary;
    this.jobLocation = jobLocation;
  }

  printString() {
    console.log(
      `${super.printString()}, I get ${this.salary} every month and I work in ${
        this.jobLocation
      }</p>`
    );

    return `${super.printString()}, I get ${
      this.salary
    } every month and I work in ${this.jobLocation}`;
  }
}

var nikos = new Person("Nikos", 39, "Frontend Developer");

var nikos1 = new Salary("Nikos", 39, "Frontend Developer", 2500, "Vienna");
var arr = [nikos, nikos1];

for (let val of arr) {
  document.getElementById("string").innerHTML +=
    val.printString() + val.closingP();
}
*/
// Advanced
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    function Vehicles(vehicleType, kategories) {
        this.vehicleType = vehicleType;
        this.kategories = kategories;
    }
    Vehicles.prototype.priceVehicle = function () {
        return "<div class=\"card\" style=\"width: 18rem;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">" + this.vehicleType + "</h5>\n      <p class=\"card-text\">" + this.kategories + "</p>\n  ";
    };
    Vehicles.prototype.closingDiv = function () {
        return "</div> </div>";
    };
    return Vehicles;
}());
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(vehicleType, kategories, kilometer, seats, fuelType, year, image) {
        var _this = _super.call(this, vehicleType, kategories) || this;
        _this.kilometer = kilometer;
        _this.seats = seats;
        _this.fuelType = fuelType;
        _this.year = year;
        _this.image = image;
        return _this;
    }
    Motorbikes.prototype.priceVehicle = function () {
        return _super.prototype.priceVehicle.call(this) + " <img class=\"card-img-top\" src=\"" + this.image + "\" alt=\"Card image cap\"><p class=\"card-text\">" + this.kilometer + "</p> <p class=\"card-text\">" + this.seats + "</p> <p class=\"card-text\">" + this.year + "</p><p class=\"card-text\">" + this.fuelType + "</p>\n   \n     ";
    };
    return Motorbikes;
}(Vehicles));
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(vehicleType, kategories, kilometer, seats, fuelType, year, image) {
        var _this = _super.call(this, vehicleType, kategories) || this;
        _this.kilometer = kilometer;
        _this.seats = seats;
        _this.fuelType = fuelType;
        _this.year = year;
        _this.image = image;
        return _this;
    }
    Trucks.prototype.priceVehicle = function () {
        return _super.prototype.priceVehicle.call(this) + " <img class=\"card-img-top\" src=\"" + this.image + "\" alt=\"Card image cap\"><p class=\"card-text\">" + this.kilometer + " km</p> <p class=\"card-text\">" + this.seats + "</p> <p class=\"card-text\">" + this.year + "</p><p class=\"card-text\">" + this.fuelType + "</p>";
    };
    return Trucks;
}(Vehicles));
var suv = new Vehicles("SUV", "Gebrauchtwagen");
var limousine = new Vehicles("Limousine", "Gebrauchtwagen");
var motors = new Vehicles("Motor", "Gebrauchtmotor");
var trucks = new Vehicles("Medium", "Gebrauchtwagen");
var motor1 = new Motorbikes("Old Timer", "Gebrauchtmotor", 5200, 2, "Petrol", 1990, "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Norton_Motorcycle.jpg/300px-Norton_Motorcycle.jpg");
var arr = [suv, limousine, motors, trucks];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    document.getElementById("vehicles").innerHTML +=
        val.priceVehicle() + val.closingDiv();
}
document.getElementById("btn").addEventListener("click", function () {
    var array = [motor1];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var val = array_1[_i];
        document.getElementById("vehicles").innerHTML +=
            val.priceVehicle() + val.closingDiv();
    }
});
console.log(suv);
