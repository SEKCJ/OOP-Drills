let person1 = {
    name: "Tina",
    sayHello: (name) => console.log(`Hello my name is ${name}`),
}

let person2 = {
    name: "Jake",
    sayHello: (name) => console.log(`Hello my name is ${name}`),
}

let person3 = {
    name: "Ray",
    sayHello: (name) => console.log(`Hello my name is ${name}`),
}

let person4 = {
    name: "Garrett",
    sayHello: (name) => console.log(`Hello my name is ${name}`),
}

let person5 = {
    name: "Rob",
    sayHello: (name) => console.log(`Hello my name is ${name}`) 
}

// person1.sayHello(person1.name);
// person2.sayHello(person2.name);
// person3.sayHello(person3.name);
// person4.sayHello(person4.name);
// person5.sayHello(person5.name);

function Greet(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;

}

Greet.prototype.logInfo = function(){
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and live in ${this.city}`);
}

// let greet1 = new Greet('Tina', 'Smyrna', '19')
// let greet2 = new Greet('Jake', 'Brentwood', '19')
// let greet3 = new Greet('Zach', 'Bessemer', '22')
// let greet4 = new Greet('Rob', 'Murfreesboro', '20')
// let greet5 = new Greet('Ray', 'New Jersey', '21');

// greet1.logInfo();
// greet2.logInfo();
// greet3.logInfo();
// greet4.logInfo();
// greet5.logInfo();

class GreetClass {
    constructor (name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }

    logInfo(){
        console.log(`Hey my name is ${this.name}, I'm ${this.age} years old and live in ${this.city}`);
    }
}

let greet1 = new GreetClass('Tina', 'Smyrna', '19')
let greet2 = new GreetClass('Jake', 'Brentwood', '19')
let greet3 = new GreetClass('Zach', 'Bessemer', '22')
let greet4 = new GreetClass('Rob', 'Murfreesboro', '20')
let greet5 = new GreetClass('Ray', 'New Jersey', '21');

// greet1.logInfo();
// greet2.logInfo();
// greet3.logInfo();
// greet4.logInfo();
// greet5.logInfo();

class Vehicle {
    constructor (manufacturer_props, num_wheels){
        this.manufacturer_props = manufacturer_props;
        this.num_wheels = num_wheels;
    }

    aboutVehicle(){
        console.log(`This is a ${this.manufacturer_props}, has ${this.wheels} wheels`);
    }
}

class Truck extends Vehicle {
    constructor(manufacturer_props, num_wheels, doors, hasBed) {
        super(manufacturer_props, num_wheels);
        this.doors = doors;
        this.hasBed = hasBed;
    }

    aboutVehicle() {
        console.log(`This is a ${this.manufacturer_props}, has ${this.num_wheels} wheels and has ${this.doors} wheels. Has bed? ${this.hasBed}`)
    }
}

class Sedan extends Vehicle {
    constructor (manufacturer_props,num_wheels,doors, size, mpg){
        super(manufacturer_props, num_wheels)
        this.doors = doors;
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle(){
        console.log(`This is a ${this.manufacturer_props}, has ${this.num_wheels} wheels and has ${this.doors} doors. It's a ${this.size} car and gets ${this.mpg}.`)
    }
}

class Bikes extends Vehicle {
    constructor(manufacturer_props, num_wheels, handlebars, no_doors){
        super(manufacturer_props, num_wheels);
        this.handlebars = handlebars;
        this.no_doors = no_doors;
    }

    aboutVehicle(){
        console.log(`This is a ${this.manufacturer_props}, has ${this.num_wheels} wheels. Has doors? ${this.no_doors} Has handlebars? ${this.handlebars}`);
    }
}

let truck1 = new Truck("Nissan", "4", "4", false);
truck1.aboutVehicle();

let sedan1 = new Sedan("Sedan", "4", "4", "small", "400");
sedan1.aboutVehicle();

let bike1 = new Bikes('Mitsubishi', 2, true, true);
bike1.aboutVehicle();
