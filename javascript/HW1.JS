

const button=document.getElementById("add");
button.addEventListener("click",()=>{
   const aa=document.getElementById("text");
   const list=document.getElementById("ul");
   const newlist=document.createElement("li");
   
   newlist.textContent=aa.value;
   list.appendChild(newlist);
})

const remove=document.getElementById("remove");
remove.addEventListener("click",()=>{
    const bb=document.getElementById("ul");
    bb.removeChild(bb.lastElementChild);
})
