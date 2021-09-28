let character = "Yusril";
let age = 30;
let isHappy = true;

character = "lluihin";

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(0.1));

let names = ["reyna", "cypher", "sova"];

names.push("cypher");
// names.push(10000); -- erorr

let numbers = [10, 20, 30, 40];

numbers.push(25);
// numbers.push("120");

let mixed = ["raze", 4, "skye", 10];

mixed.push("ryu");
mixed.push(10);
mixed[0] = 10;

//object

let ninja = { name: "Mario", status: "masterclass", age: 10 };

// ninja = { name: "Raze", status: "beginner", age: 90, skill: [] };

let kame: any;

kame = "rill";
kame = 10;

let mixedArray: any[] = [];

mixedArray.push(5);
mixedArray.push("Rill");
mixedArray.push("false");

console.log(mixed);

let ninjas: { name: any; age: any };

ninjas = { name: "Yusrils", age: 20 };
console.log(ninjas);
