"use strict";
{
    const user = {
        id: 992,
        name: {
            firstName: "Mohammad",
            lastName: "Sumon",
        },
        contactNo: "0191991992",
        address: "Dhaka",
    };
    const { contactNo, name: { lastName }, } = user;
    // array destructuring
    const myFriends = ["sakib", "asif", "shibly", "babu", "ismail"];
    const [, , bestFriend, ...rest] = myFriends;
}
