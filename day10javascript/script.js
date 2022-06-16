

function findTarget(array, target) {

    for( let i =0; i<array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}


const myArray = [1,2,3,4,5]
const ans = findTarget(myArray, 2);
console.log(ans);
    

// function expression
const print = function(){
    console.log('hello world')
}


print()

// arrow function
const print1 = () => {
    console.log('hello world')
}

print1()


// hoisting
console.log(dragon)

dragon = "dragondonn"