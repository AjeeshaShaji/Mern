const fs=require ("fs");


// read a file 


fs.readFile("fsmodule.txt","utf8",(error,data)=>{
    if(error){
        console.log(error);
    }else{
        console.log("file content:" ,data)
    }
})


// write in file 


fs.writeFile("new.txt","hello",(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("succesfully written")
    }
})


// append a file 


fs.appendFile("new.txt","what are you doing ?",(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("succesfully appended")
    }
})


// delete a file 


fs.unlink("new.txt",(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("deleted succesfully")
    }
})


// create directory 


fs.mkdir("newfolder",(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("folder created succesfully")
    }
})


// remove directory 


fs.rmdir("newfolder",(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("folder removed succesfully")
    }
})


// exist or not 


if(fs.existsSync("new.txt")){
    console.log("file exist")
}else{
    console.log("file not exist")
}


// rename a file 


fs.rename("fsmodule.txt","demo.txt",(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("successfully renamed")
    }
})