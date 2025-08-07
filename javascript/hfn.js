let frst=function()
{
    console.log("frist function");
}

let scnd=function(action)
{
    console.log("second function");
    action(); 
}

scnd(frst);