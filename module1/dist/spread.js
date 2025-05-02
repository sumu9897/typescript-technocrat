"use strict";
{
    const sub1 = ["phy", "se", "math", "chem"];
    const sub2 = ["moq", "hrm", "bc", "bl"];
    sub1.push(...sub2);
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    const mentors2 = {
        prisma: "Firoz",
        next: "Tonmoy",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // Rest Operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => {
            console.log(`Hi ${friend}`);
        });
    };
    greetFriends("Abul", "Kalam");
}
