// classes

class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("Jett", "work in huge mountain", 300);
const invTwo = new Invoice("Phoenix", "work in fire goverment", 300);

//console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invOne.client = "Yusril";
invTwo.amount = 400;

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

console.log(invOne, invTwo);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
