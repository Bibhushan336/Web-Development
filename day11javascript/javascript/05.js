//filter method

const numbers = [1,2,3,4,5,6,7,8];



const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});

console.log(evenNumbers);


console.log('........................................')
// reduce method



const num= [1,2,3,4,5];

//sum of all the numbers in array
const sum = num.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});

console.log(sum)
