{
  const sub1: string[] = ["phy", "se", "math", "chem"];
  const sub2: string[] = ["moq", "hrm", "bc", "bl"];

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

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // Rest Operator

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
      console.log(`Hi ${friend}`);
    });
  };

  greetFriends("Abul", "Kalam");
}
