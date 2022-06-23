// synchorous and asynchorous javascript



console.log("script start");

setTimeout(() => {
    console.log('inside setTimeout');
}, 1000);

console.log("script end");




console.log("new code ........................")

console.log("script start");

const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

for (let i = 1; i < 100; i++) {
  console.log("....");
}
console.log("settimeout id is ", id);
console.log("clearing time out");
clearTimeout(id);
console.log("Script end");