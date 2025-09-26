function names(obj){

    obj.name="Ajeesha";
    console.log(`inside : ${obj.name}`)

}


let person={ name:"Ajeesha shaji" }

console.log(`outside 1 : ${person.name}`)

names(person);

console.log(`outer 2 : ${person.name}`)