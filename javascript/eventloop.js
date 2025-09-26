console.log("start");

setTimeout(()=>{
    console.log("set time out");

},0)

Promise.resolve().then(()=>{
        console.log("promise")
    })

console.log("end")