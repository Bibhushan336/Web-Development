// this method


const person = {
    firstName : "bibhushan",
    age: 20,
    about : function(){
        console.log(`person name is ${this.firstName}, age is ${this.age}`)
    }

}

person.about();