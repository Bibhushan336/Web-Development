// Promise 


const bucket =['rice', 'sugar', 'salt'];


const friedRicePromise = new Promise((resolve,reject)=>{

    if(bucket.includes("rice") && bucket.includes("sugar") && bucket.includes("salt")){
        resolve("Fried rice");
    }else{
        reject("Could't do it");
    }
})


//produce



//consume

//how to consume



friedRicePromise.then((myfriedRice)=>{
    console.log('lets eat', myfriedRice);
},(error)=>{console.log(error)})
