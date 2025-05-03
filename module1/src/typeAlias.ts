{
    // type Alias

    type Student = {
        name : string;
        age : number;
        contactNo? : string;
        gender : string;
        isStudent?: boolean;
        address: string
    }

    const student1 : Student = {
        name : "Mohammad",
        age: 26,
        contactNo: "019827266262",
        gender: 'male',
        isStudent: true,
        address: 'Dhaka'
    }

    const student2 : Student = {
        name: 'Shibly',
        age : 26,
        gender : 'male',
        isStudent : false,
        address: 'UK'
    }

    type UserName = string

    const userName : UserName = 'sumu'

    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2
}