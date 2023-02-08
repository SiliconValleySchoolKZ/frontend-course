//bank
class BankAccount {
  #balance = 0;
  #owner = "";

  constructor(owner, balance) {
    this.#owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    return `Deposited ${amount}. Balance is now ${this.#balance}.`;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error(
        `Insufficient funds. Available balance is ${this.#balance}.`
      );
    } else {
      this.#balance -= amount;
      return `Withdrew ${amount}. Balance is now ${this.#balance}.`;
    }
  }

  checkBalance() {
    return `Balance of account owned by ${this.#owner} is ${this.#balance}.`;
  }
}

const account = new BankAccount("John Doe", 500);

console.log(`Balance: ${account.checkBalance()}`);

account.deposit(100);
console.log(`Balance: ${account.checkBalance()}`);

account.withdraw(200);
console.log(`Balance: ${account.checkBalance()}`);

try {
  account.withdraw(800);
} catch (error) {
  console.log(error.message);
}

//contact

class Contact {
  constructor() {
    this._contacts = [];
  }

  addContact(name, phone, email) {
    this._contacts.push({
      name,
      phone,
      email,
    });
  }

  removeContact(name) {
    this._contacts = this._contacts.filter((contact) => contact.name !== name);
  }

  viewContacts() {
    return this._contacts;
  }
}

const myContacts = new Contact();

myContacts.addContact("John Doe", "555-555-5555", "johndoe@example.com");
myContacts.addContact("Jane Doe", "555-555-5556", "janedoe@example.com");

console.log(myContacts.viewContacts());

myContacts.removeContact("John Doe");

console.log(myContacts.viewContacts());
