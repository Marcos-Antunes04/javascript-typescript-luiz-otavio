//Superclass
function Account(agency, account, balance) {
  this.agency = agency;
  this.account = account;
  this.balance = balance;
}

Account.prototype.withdraw = function(value) {
  if (this.balance < value){
    console.log(`Insufficient funds: ${this.balance}`)
    this.seeBalance();
    return;
  } 

  this.balance -= value;
  this.seeBalance();
}

Account.prototype.deposit = function(value) {
  this.balance += value;
  this.seeBalance();
}

Account.prototype.seeBalance = function() {
  console.log(`Ag/ac: ${this.agency}/${this.account} | ` + `Balance: R$ ${this.balance.toFixed(2)}`);
}

const account001 = new Account(11, 22, 10);


// Creating checking account
function CheckingAccount(agency, account, balance, limit) {
  Account.call(this, agency, account, balance);
  this.limit = limit;
}
CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.withdraw = function(value) {
  if (this.balance + this.limit < value){
    console.log(`Insufficient funds: ${this.balance}`)
    return;
  } 

  this.balance -= value;
  this.seeBalance();
}


// creating savings account
function SavingsAccount(agency, account, balance) {
  Account.call(this, agency, account, balance);
}
SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;


const checkingAccount001 = new CheckingAccount(11, 22, 0, 100);
checkingAccount001.deposit(10);
checkingAccount001.withdraw(110);
checkingAccount001.withdraw(1);

console.log();

const savingAccount001 = new SavingsAccount(12, 33, 0);
savingAccount001.deposit(10);
savingAccount001.withdraw(110);
savingAccount001.withdraw(1);