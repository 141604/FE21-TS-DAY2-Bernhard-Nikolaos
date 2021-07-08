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

class Vehicles {
  vehicleType: string;
  kategories: string;
  constructor(vehicleType, kategories) {
    this.vehicleType = vehicleType;
    this.kategories = kategories;
  }
  priceVehicle() {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${this.vehicleType}</h5>
      <p class="card-text">${this.kategories}</p>
  `;
  }
  closingDiv() {
    return `</div> </div>`;
  }
}

class Motorbikes extends Vehicles {
  kilometer: number;
  seats: number;
  fuelType: string;
  year: number;
  image: string;

  constructor(
    vehicleType: string,
    kategories: string,
    kilometer: number,
    seats: number,
    fuelType: string,
    year: number,
    image: string
  ) {
    super(vehicleType, kategories);
    this.kilometer = kilometer;
    this.seats = seats;
    this.fuelType = fuelType;
    this.year = year;
    this.image = image;
  }

  priceVehicle() {
    return `${super.priceVehicle()} <img class="card-img-top" src="${
      this.image
    }" alt="Card image cap"><p class="card-text">${
      this.kilometer
    }</p> <p class="card-text">${this.seats}</p> <p class="card-text">${
      this.year
    }</p><p class="card-text">${this.fuelType}</p>
   
     `;
  }
}

class Trucks extends Vehicles {
  kilometer: number;
  seats: number;
  fuelType: string;
  year: number;
  image: string;

  constructor(
    vehicleType: string,
    kategories: string,
    kilometer: number,
    seats: number,
    fuelType: string,
    year: number,
    image: string
  ) {
    super(vehicleType, kategories);
    this.kilometer = kilometer;
    this.seats = seats;
    this.fuelType = fuelType;
    this.year = year;
    this.image = image;
  }

  priceVehicle() {
    return `${super.priceVehicle()} <img class="card-img-top" src="${
      this.image
    }" alt="Card image cap"><p class="card-text">${
      this.kilometer
    } km</p> <p class="card-text">${this.seats}</p> <p class="card-text">${
      this.year
    }</p><p class="card-text">${this.fuelType}</p>`;
  }
}

var suv = new Vehicles("SUV", "Gebrauchtwagen");
var limousine = new Vehicles("Limousine", "Gebrauchtwagen");
var motors = new Vehicles("Motor", "Gebrauchtmotor");
var trucks = new Vehicles("Medium", "Gebrauchtwagen");

var motor1 = new Motorbikes(
  "Old Timer",
  "Gebrauchtmotor",
  5200,
  2,
  "Petrol",
  1990,
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Norton_Motorcycle.jpg/300px-Norton_Motorcycle.jpg"
);

var arr = [suv, limousine, motors, trucks];

for (let val of arr) {
  document.getElementById("vehicles").innerHTML +=
    val.priceVehicle() + val.closingDiv();
}

document.getElementById("btn").addEventListener("click", function () {
  let array = [motor1];

  for (let val of array) {
    document.getElementById("vehicles").innerHTML +=
      val.priceVehicle() + val.closingDiv();
  }
});
console.log(suv);
