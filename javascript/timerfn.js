// setTimeout(()=>{
//     console.log("settimeout in 2 sec");
// },2000)


// setInterval(()=>{
//     console.log("setinterval of 2 sec");
// },2000)


// const intervalid=setInterval(() => {
//     console.log("setinterval")
// }, 2000);

// setTimeout(() => {
//     clearInterval(intervalid)
// }, 10000);



new Promise((resolve,reject)=>{
    setTimeout(()=>
    {
        resolve(1);
    },2000)
})
.then(num=>{
    console.log(num);
    return num+1;
})
.then(num=>{
    console.log(num)
})
