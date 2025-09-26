

let bet=[1,2,3,4,5,6];
let aa=bet.filter((item,index)=>{
    return item%2==0;
})
console.log(aa);



let k=[1,3,2,5,20];
let bb=k.map((item)=>{
    return(item*item)
})
console.log(bb)


let kb=[1,3,2,5,20];
let hj=kb.reduce((acc,curr)=>{
    return acc+curr;
})
console.log(hj)