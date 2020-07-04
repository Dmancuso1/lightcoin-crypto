
// LightCoin (LHL)



// Here's a list of features that our code needs to support:
///////////////////////////////////
// Allow multiple accounts to be created
// Each account can have many transactions
// Allow withdrawals and deposits into accounts
// Allow us to retrieve the transaction history of an account (all withdrawals and deposits)
// Allow us to retrieve the current balance of the account at any time
// Don't allow withdrawals that exceed the remaining balance of the account


////////////////////////////// Account class
class account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

////////////////////////////// Transaction class
class Transaction  {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.account.balance += this.value;
  }
}

////////////////////////////// Withdrawl class
class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

////////////////////////////// Deposit class
class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}




///////////////////////////////////
// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new account(`Canada's Wonderland`)

console.log('Starting balance', myAccount.balance)

transaction3 = new Deposit(60000, myAccount);
transaction3.commit();
console.log('transaction 3:', transaction3)

transaction1 = new Withdrawal(50.25, myAccount);
transaction1.commit();
console.log('Transaction 1:', transaction1);

transaction2 = new Withdrawal(9.99, myAccount);
transaction2.commit();
console.log('Transaction 2:', transaction2);




