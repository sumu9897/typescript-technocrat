"use strict";
// Function
// Normal Function
// Arrow Function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 5);
const addArrow = (num1, num2) => num1 + num2;
// Object --> function --> method
const User = {
    name: 'Mohammad',
    balance: 10,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    }
};
const arr = [1, 4, 10];
const newArray = arr.map((elem) => elem * elem);
