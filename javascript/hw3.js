

const button=document.getElementById("btn");
button.addEventListener("click",()=>{
    const ivalue=document.getElementById("num").value;
    
        for(i=1;i<=ivalue;i++)
        {
            const btn=document.getElementById("button");
            btn.innerHTML+=` <button id=abc${i} onclick=alert(i) ></button>`;
            
            document.getElementById(`abc${i}`).textContent=i;


        }
    
})
