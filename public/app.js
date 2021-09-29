import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
//
// docOne = new Invoice("Rill", "Web Developer", 250);
// docTwo = new Payment("Rill", "Valorant Player", 800);
//
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
//
// console.log(docs)
// const invOne = new Invoice("Jett", "work in huge mountain", 300);
// const invTwo = new Invoice("Phoenix", "work in fire goverment", 300);
//console.log(invOne, invTwo);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
//
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
// console.log(invOne, invTwo);
const form = document.querySelector(".new-item-form");
console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
