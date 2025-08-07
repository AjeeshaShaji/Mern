var n=1234;
var s=0;
while(n>0)
{
    s+=n% 10;
    n= parseInt(n/10);
}
console.log(s);