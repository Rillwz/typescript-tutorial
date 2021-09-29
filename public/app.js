const me = {
    name: "Rill",
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
let greetPerson = (person) => {
    console.log("hello", person.name);
};
console.log(me);
console.log(greetPerson);
import { Invoice } from "./classes/Invoice";
const invOne = new Invoice("Jett", "work in huge mountain", 300);
const invTwo = new Invoice("Phoenix", "work in fire goverment", 300);
//console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
console.log(invOne, invTwo);
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
