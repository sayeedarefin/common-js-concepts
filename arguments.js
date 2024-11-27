function sum(a,b,c){
    console.log(arguments);
    console.log(typeof arguments);
    console.log(arguments[2]);
    const args =[...arguments];

    
    console.log(args);
    const result =a+b+c;
    return result;
}

const total = sum(1,2,3,3,4,5,6);
console.log(total);
console.log(typeof sum);
console.log(sum.length);
// console.log(arguments); //gives error

// parameters are inside() in function
// arguments are inside () in return
// arguments is array like object
// cannot use arguments.push(32)




// passby objest

let num1 = 5;
let num2 = 15;

function multiply(a,b){
    a=100;
    const result = a*b;
    return result;
}

console.log(num1);
console.log(num2);
const output = multiply(num1, num2);
console.log(output);

let student1= {name: 'jalil', partner: 'borsha'};
let student2= {name: 'raj', partner: 'pori'};

function makemovie(couple1, couple2){

couple1.name = 'ononto';
couple2.partner = 'mim';
}
console.log(student1, student2);
makemovie(student1, student2);
console.log(student1, student2);

//obejct and array are pass by reference
//primitive types are pass by value