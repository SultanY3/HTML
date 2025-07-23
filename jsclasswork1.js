const prompt = require("prompt-sync")();

let users = [];

function showMenu() {
  return prompt(
    `Choose an option:
1: Create User
2: Deposit Amount
3: Withdraw Amount
4: Delete Account
5: Exit
> `
  );
}

function findUser(id, phone) {
  return users.findIndex(user => user.id === id && user.phone === phone);
}

function createUser() {
  const name = prompt("Enter name: ");
  const id = prompt("Enter ID: ");
  const phone = prompt("Enter Phone Number: ");
  const deposit = Number(prompt("Enter Deposit Amount: "));

  if (users.some(user => user.id === id)) {
    console.log("ID already exists.");
    return;
  }

  if (users.some(user => user.phone === phone)) {
    console.log("Phone number already exists.");
    return;
  }

  if (deposit <= 0 || isNaN(deposit)) {
    console.log("Invalid deposit amount.");
    return;
  }

  users.push({ name, id, phone, balance: deposit });
  console.log("User created successfully.");
}

function depositAmount() {
  const id = prompt("Enter ID: ");
  const phone = prompt("Enter Phone Number: ");
  const index = findUser(id, phone);

  if (index === -1) {
    console.log("User not found.");
    return;
  }

  const amount = Number(prompt("Enter amount to deposit: "));
  if (amount <= 0 || isNaN(amount)) {
    console.log("Invalid amount.");
    return;
  }

  users[index].balance += amount;
  console.log(`Deposit successful. New Balance: ₹${users[index].balance}`);
}

function withdrawAmount() {
  const id = prompt("Enter ID: ");
  const phone = prompt("Enter Phone Number: ");
  const index = findUser(id, phone);

  if (index === -1) {
    console.log("User not found.");
    return;
  }

  const amount = Number(prompt("Enter amount to withdraw: "));
  if (amount <= 0 || isNaN(amount)) {
    console.log("Invalid amount.");
    return;
  }

  if (amount > users[index].balance) {
    console.log("Not enough balance.");
    return;
  }

  users[index].balance -= amount;
  console.log(`Withdrawal successful. New Balance: ₹${users[index].balance}`);
}

function deleteAccount() {
  const id = prompt("Enter ID: ");
  const phone = prompt("Enter Phone Number: ");
  const index = findUser(id, phone);

  if (index === -1) {
    console.log("User not found.");
    return;
  }

  users.splice(index, 1);
  console.log("Account deleted successfully.");
}

function main() {
  let choice;
  do {
    choice = showMenu();
    switch (choice) {
      case "1":
        createUser();
        break;
      case "2":
        depositAmount();
        break;
      case "3":
        withdrawAmount();
        break;
      case "4":
        deleteAccount();
        break;
      case "5":
        console.log("Exiting program.");
        break;
      default:
        console.log("Invalid choice, please try again.");
    }
  } while (choice !== "5");
}

main();