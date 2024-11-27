// function greeting(person){
//     console.log(person);
// }
function greeting(greetingHandler, name){
    greetingHandler(name);
}

// greeting('Halim mama');
const numbers = [23,45,67,89];
// greeting(numbers);

const laptop ={price: 23444, brand: 'lenovo', memory: 4};
// console.log(laptop);

function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Eveneing', name)
}

function greetNight(name){
    console.log('Good Night', name)
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom bradd');
greeting(greetingHandler, 'Tom jerry');
greeting(greetingHandler, 'Tom cruise');
greeting(greetEvening, 'solaiman');
greeting(greetNight, 'cherry');

// whe we do these?
// because as follow: 
document.getElementById('btn-submit').addEventListener('click', function(){
    console.log('submit button clicked');
})

// instead we use these
function functionname(){
    console.log('submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click', functionname);