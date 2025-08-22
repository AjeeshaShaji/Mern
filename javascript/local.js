


const button=document.getElementById("btn");

button.addEventListener("click",()=>{
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;

    localStorage.setItem("name",name);
    localStorage.setItem("age",age);
})




const remove=document.getElementById("remove");

remove.addEventListener("click",()=>{
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;

    localStorage.removeItem("name",name);
    localStorage.removeItem("age",age);
})