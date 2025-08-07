var a='-19%';

if(a<='100%' && a>='80%')
{
    console.log('Hot');
}
else if(a<='79%' && a>='60%')
{
    console.log("Warm");
}
else if(a<='59%' && a>='40%')
{
    console.log("pleasant");
}
else if(a<='39%')
{
    console.log("cold");
}
else{
    console.log("invalid")
}
