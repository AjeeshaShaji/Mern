let form=document.getElementById("form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let name=document.getElementById("name").value;

    let age=document.getElementById("age").value;

    let email=document.getElementById("email").value;

    let gender=document.querySelector(`input[name="gender"]:checked`).value;

    let state=document.getElementById("state").value;

    alert(`form submitted successfuly ! \n username:${name} \n age: ${age} \n email: ${email} \n gender: ${gender} \n state : ${state}`);
})