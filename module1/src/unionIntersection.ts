{
    // union types
    type FrontendDeveloper = 'MERNDeveloper' | 'juniorDeveloper'
    type FullStackDeveloper = 'BackendDeveloper' | 'frontendDeveloper'

    const newDeveloper : FrontendDeveloper = 'MERNDeveloper'

    type User = {
        name : string;
        email? : string;
        gender : "male" | "female";
        bloodGroup: "A+" | "A-" | "AB+" | "AB-"| "O+" |"O-";
        address : "Barishal"|"Chattogram"|"Dhaka"|"Khulna"|"Rajshahi"|"Rangpur"|"Mymensingh"|"Sylhet"
    }

    const user1 : User ={
        name: 'Mohammad',
        gender: 'male',
        bloodGroup: 'O+',
        address: 'Dhaka'
    }

}