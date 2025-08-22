const name=document.getElementById("name");
const pass=document.getElementById("number");

const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    const namevalue=document.getElementById("name").value;
    const passvalue=document.getElementById("number").value;
    alert("hello  "+namevalue  +passvalue)
})