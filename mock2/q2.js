
let a=[1 ,[2, [3, [4]], 5]];
let sum=0;
let b=a.reduce((acc,crr)=>{
    sum+=acc+crr;
    return sum;
})

console.log(b);
for( let key of b)
{
    sum+=b[key];
    
}
console.log(sum);