//type script object exercise 21

interface person1{
    name:string;
    age:number;
    nationality:string;
    postal_code: number;
    date_of_birth:number;
    cast:string
    Are_you_student:boolean
    sex:string
}
// creating two person object
let person1={ 
    name:'yamman',
    age:19,
    nationality:'pakistan',
    postal_code: 2210,
    date_of_birth:2005,
    cast:'butt',
    Are_you_student:true,
    sex:'Male',
}
//print person name
console.log(person1)
// object 2 car
interface car{
    maker:string;
    color:string;
    model:number;
    serial_no:number;
}
let car={
    maker:'honda',
    color:'red',
    model:333,
    serial_no:234,
}
console.log(car)
