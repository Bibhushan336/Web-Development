// param destructring


//object
//react


const person = {
    firstName: "bibhushan",
    gender: "male",
}


// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


function printDetails({firstName, gender}) {
    console.log(firstName);
    console.log(gender);
}


printDetails(person);

