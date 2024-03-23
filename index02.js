//---customer---// (คลาสนี้เสร็จแล้ว เพื่อนทำในห้อง)
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
    constructor(){

    }
    calculateInterest(){}
    getOverdraftLimit(){}
    setOverdraftLimit(){}
}

//---savingsAccount---//
class SavingsAccount {
    InterestRate = "";
    constructor(){

    }
    calculateInterest(){}
    getInterestRate(){}
    setInterestRate(rate){}
}

//---transaction---//
//-บันทึกว่าทำรายการอะไรบ้าง-// (เสร็จคลาสนี้แตถูกไหมไม่รู้)
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
    getTransactionId(){
        return this.transactionId;
    }
    getTransactionType(){
        return this.transactionType;
    }

    setTransactionType(transactionType){
        this.transactionType = transactionType;
    }

    getAmount(){
        return this.amount;
    }
    setAmount(amount){
        this.amount = amount;
    }
    getTransactionDate(){
        return this.transactionDate;
    }
    setTransactionDate(transactionDate){
        this.transactionDate =transactionDate;
    }
    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status = status;
    }
    toString() {
        return `class Transaction {
            [transactionId=${this.transactionId}, transactionType=${this.transactionType}, amount=${this.amount}, transactionDate=${this.transactionDate}, status=${this.status}]`;
    }
}

//---bank---// (คลาสนี้เสร็จแล้ว เพื่อนทำในห้อง)
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
    identify(){}
    checkBalance(){}
    withdraw(){}
    deposit(){}
    changePin(){}
    transfer(){}
    verify(){}
}

//---main---//
const main = () => {

}