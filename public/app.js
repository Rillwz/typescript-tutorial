"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("Jett", "work in huge mountain", 300);
const invTwo = new Invoice("Phoenix", "work in fire goverment", 300);
//console.log(invOne, invTwo);
let Invoices = [];
Invoices.push(invOne);
Invoices.push(invTwo);
invOne.client = "Yusril";
invTwo.amount = 400;
console.log(invOne, invTwo);
console.log(Invoices);
const form = document.querySelector(".new-item-form");
console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
