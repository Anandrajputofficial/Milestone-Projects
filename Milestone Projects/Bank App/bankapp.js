// Create a customer object with name and balance properties
const customer = {
    name: "John Doe",
    balance: 1000
  };
  
  // Function to deposit money into the customer's account
  function deposit(customer, amount) {
    customer.balance += amount;
    console.log(`Deposited ${amount} into ${customer.name}'s account. New balance is ${customer.balance}.`);
  }
  
  // Function to withdraw money from the customer's account
  function withdraw(customer, amount) {
    if (customer.balance >= amount) {
      customer.balance -= amount;
      console.log(`Withdrew ${amount} from ${customer.name}'s account. New balance is ${customer.balance}.`);
    } else {
      console.log(`Insufficient balance in ${customer.name}'s account.`);
    }
  }
  
  // Example usage
  console.log(customer); // {name: "John Doe", balance: 1000}
  deposit(customer, 500); // Deposited 500 into John Doe's account. New balance is 1500.
  withdraw(customer, 200); // Withdrew 200 from John Doe's account. New balance is 1300.
  withdraw(customer, 1500); // Insufficient balance in John Doe's account.
  