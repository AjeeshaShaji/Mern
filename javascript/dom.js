const element=document.getElementsByClassName("main");
console.log(element[0].innerHTML)



const para=document.createElement("p2");
para.textContent="This is a new paragrah";
document.getElementById("main").appendChild(para);




const button=document.getElementById("button");
button.addEventListener("click",()=>{
    const values=document.getElementById("text").value;
    alert("hello  "+values)
})



const para=document.createElement("p2");
para.textContent="This is a new paragrah";
const oldpara=document.getElementById("p");
document.getElementById("main").replaceChild(para,oldpara);