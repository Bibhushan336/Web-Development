

const users = [
    {firstName: "bibhushan", age: 23},
    {firstName: "siddhant", age: 22},
    {firstName: "rohan", age: 19},
    {firstName: "ajit", age: 45},
]


// using anonomous function and forEach
users.forEach(function(user){
    console.log(user.firstName);

});

// for let loop
for(let user of users){
    console.log(user.firstName);
}

// arrow function


users.forEach((user)=>{
    console.log(user.firstName)
})