async function showDetails()
{
    try{
        let res=await fetch("https://dummyjson.com/products")

        let datas= await res.json()
        document.getElementById("main")
        let html="";
        datas.products.forEach((element,index) => {
            html+=`<div class="cards"><h1>${element.title}</h1><p>${element.category}</p>`
        });
        
        
    }

    catch(error){
        console.log("error");
    }
    
}