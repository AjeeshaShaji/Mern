

let a=[1,2,3,4,5];
let b=a.forEach((item)=>{
    console.log(item);
})



let c=a.forEach((item,index)=>{
    console.log(index+":"+item);
})



let d=[2,4,6,8];
let newarr=d.map((item)=>{
    return item*item
})
console.log(newarr);



let e=[1,2,3,4,5,6];
let ff=e.find((item,index)=>{
    return item==index+1;
})
console.log(ff);



let bet=[1,2,3,4,5,6];
let aa=bet.filter((item,index)=>{
    return item==index+1;
})
console.log(aa);



let hi=[1,23,12,34,5,4,96];
let sum=hi.reduce((acc,crr)=>{
    return acc+crr;
})
console.log(sum);
