const array1 = [1,2,3];
const array2 = [5,6,7];

const newArray = [...array1, ...array2, 8];

console.log(newArray);


//destructuring array 
const alphabet = ['dog', 'b', 'cat', 'b', 'e'];
const [, , c] = alphabet;
console.log(c);