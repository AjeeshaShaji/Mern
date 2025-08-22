const obj=new Map();
console.log(obj);

const hello=new Map([
    ["name","Ajeesha"],
    ["age",21],
    [2,"hii"]
]);
console.log(hello);

hello.set(3,"love");
console.log(hello);

let r=hello.get(2);
console.log(r);


console.log(hello.has(8));