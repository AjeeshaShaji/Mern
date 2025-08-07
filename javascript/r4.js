const obj={a:10 , b:12 , c:40 , d:2 , e:30 };
let com=0;
for(let key in obj)
{
    if(obj[key]>com)
    {
        com=obj[key];
    }
}
console.log(com + " is the highest numeric value")