
function save(){

    let data=JSON.parse(localStorage.getItem("name"))||[];

    let value=document.getElementById("text").value;

    data.push(value);

    localStorage.setItem("name",JSON.stringify(data));

    show();
}


function show()
{
    let data=JSON.parse(localStorage.getItem("name"));

    let list=document.getElementById("list");

    let html="";
    data.forEach((element ,index) => {
        html+=`<li>${element}</li><button id="edit" onclick="edits(${index})">edit</button><button id="delete" onclick="deletes(${index})">delete</button>`
    });
    list.innerHTML=html;
}


function deletes(index)
{
    let data=JSON.parse(localStorage.getItem("name"));

    data.splice(index,1);

    localStorage.setItem("name",JSON.stringify(data));

    show();

}

function edits(index)
{
    let data=JSON.parse(localStorage.getItem("name"));
    
    let newvalue=prompt("edit value :",data[index]);
    
    if(newvalue!=null)
    {
        data[index]=newvalue;
    }
 
    localStorage.setItem("name",JSON.stringify(data));

    show();

}