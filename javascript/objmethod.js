// function inside an object

const obj={name:"synnefo", 
            age:20 , 
            greet:function(){
                            console.log("hii");}
        }
obj.greet();
console.log(obj);


// object constructor

const person=new Object();
person.name="Ajeesha";
person.age=21;

console.log(person);

// updating values

const persons=new Object();
persons.name="Ajeesha";
persons.age=21;
persons.name="Ajeesha shaji"

console.log(persons);

// deleting values

const persoon=new Object();
persoon.name="Ajeesha";
persoon.age=21;
delete persoon.name;

console.log(persoon);

// object methods

const a=Object.keys(person)
console.log(a);

const b=Object.values(person)
console.log(b);

const c=Object.entries(person)
console.log(c);