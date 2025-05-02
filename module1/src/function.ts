// Function
// Normal Function
// Arrow Function

function add(num1: number, num2: number){
    return num1 + num2;
}

add(2, 5)

const addArrow = (num1: number, num2: number) : number => num1+ num2

// Object --> function --> method

const User = {
    name : 'Mohammad',
    balance: 10,
    addBalance(balance: number): string{
        return `My new balance is : ${this.balance + balance}`;
    }
}