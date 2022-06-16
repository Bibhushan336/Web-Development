// lexical scope




// rest parameters


function addAll (...numbers) {
    let total = 0;

    for (let number of numbers){
        total =total + number;
    }
    return total;
}


const ans = addAll(4,5,6,7);
console.log(ans)