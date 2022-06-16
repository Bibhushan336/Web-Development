// // reduce method



// const num= [1,2,3,4,5];

// //sum of all the numbers in array
// const sum = num.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// });

// reduce method



const userCart = [
    {productId: 1, productName:"mobile", price:20},
    {productId: 2, productName:"laptop", price:10},
    {productId: 3, productName:"pc", price:30},
]



const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price 
}, 0);

console.log(totalAmount);