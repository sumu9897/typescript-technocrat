{

    const age : number = 15;

    if(age >= 18){
        console.log('adult');
    }else {
        console.log("not adult")
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult'
    console.log({isAdult})
    // null
    const isAuthenticated = "";
    // nullish coalescing operator
    const result1 = isAuthenticated ?? "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({result1, result2})
}