let user = {
    name: 'bibhushan',
    age: 30,
    email: 'bibhushanthapa@gmail.com',
    location: 'berlin',
    blogs: ['hello', 'hi'],
    login: function() {
        console.log('the user logged in');
    }
};

// object literals
console.log(user)
console.log(user.name);

console.log(user.age);

console.log(user['email'])
user['name'] = 'dragondonn';
console.log(user['name']);


console.log(typeof user)

console.log('..........................')

user.login();






