//---customer---//
class Customer {
    name = "";
    address = "";
    phone = "";
    email = "";
    accounts = [];
    constructor(
        name, 
        address, 
        phone, 
        email
    ){
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    //-ตรวจสอบว่าเป็นเจ้าของบัญชีไหม-//
    verify(
        name, 
        address, 
        phone, 
        email
    ){
        if (this.name === name &&
            this.address === address &&
            this.phone === phone &&
            this.email === email
        ){
            return true;
        } else {
            return false;
        }
    }
    //-ทำความรู้จักบัญชี-//
    getAccount() {
        return this.accounts;
    }
    //-สร้างบัญชี-//
    createAccount(bank, accountType) {
        return bank.createAccount(accountType)
    }
    toString() {
        return `Customer [name = ${this.name}, address = ${this.address}, phone = ${this.phone}, email = ${this.email} , accounts = ${this.accounts}]`;
    }
}

//---account---//
class Account {
    accountNumber = "";
    balance = 0;
    constructor(
        accountNumber, 
        balance
    ){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {

    }
    withdraw(amount) {

    }
    createTransaction() {}
    getTransaction() {}
    getBalance() {}
    getAccountType() {}
    getCustomer() {}
    setCustomer() {}
}

//---currentaccount---//
class CurrentAccount {
    overdraftLimit = "";
    overdraftInterest = "";
}

//---savingsAccount---//
class SavingsAccount {
    InterestRate = "";
}

//---transaction---//
//-บันทึกว่าทำรายการอะไรบ้าง-//
class Transaction {
    transactionId = "";
    transactionType = "";
    amount = "";
    transactionDate = "";
    status = "";
    constructor(
        transactionId,
        transactionType,
        amount,
        transactionDate,
        status
    ){
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.amount = amount;
        this.transactionDate = transactionDate;
        this.status = status;
    }

}

//---bank---//
class Bank {
    name = "";
    address = "";
    code = "";
    constructor(
        name, 
        address, 
        code
    ){
        this.name = name;
        this.address = address;
        this.code = code;
    }
    createAccount(accountType){
        let account;
        if(accountType === "currentAccount"){
            account = new CurrentAccount("654259", 500, 100, 0.2)
            return account;
        }else{
            account = new SavingsAccount("654260", 500, 0.5)
            return account;
        }
    }
    createCustomer(name, address, phone, email){
        const customer = new Customer("Roes", "Rayong", "0894561237", "rararo@gmail.com");
        return customer;
    }
    createATM(){
        const atm = new ATM("Ban Chang", "bankSE")
        return atm;
    }
}

//---atm---//
class ATM {
    location = "";
    mangedBy = "";
    constructor(
        location,
        mangedBy
    ){
        this.location =location;
        this.mangedBy = mangedBy;
    }
}





//---main---//
const main = () => {

}