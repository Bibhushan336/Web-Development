
// important array methods

const numbers = [4,7,8,9];

function myFunc(number,index) {
    console.log(`index is ${index} number is ${number}`);
}

// for(let i = 0; i <numbers.length; i++){
//     myFunc(numbers[i], i);
// }

numbers.forEach(myFunc);

