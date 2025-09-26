// spread : used to expand array or object


let a=[1,2,3,4,5];

let b=[6,7,8,9,10];

let c=[...a,...b];

console.log(c);



let obj1={a:10,b:30,c:50}

let obj2={d:20,e:40,f:60,g:80}

let obj3={...obj1,...obj2}

console.log(obj3);




// dedstructuring : used to unpack array or object


let arr1=[100,200,300,400,500];

let [aa,bb,cc]=arr1

console.log(aa)



let object1 = {name:"Ajeesha",age:21,email:"aju@gmail.com"};

let {name,age,email} = object1;

console.log(name,age,email);