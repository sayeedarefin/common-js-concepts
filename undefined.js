// 8 ways to get undefined

// 1. variable that is not initialized will give en undefined (let)

// const first; //
// console.log(first); //gives error

let first;
console.log(first);

// 2. function with no return

function second(a, b){
    const total = a+b;
}

console.log(second());

// 3. parameters that is not defined
function third(a,b,c,d){
    const total = a+b+c+d;
    console.log(a,b,c,d)
}
third (2,3,);


// 4. if return has nothing on the right side returns undefined
function noNegative(a,b){
    if (a<0 || b<0){
        return
    }
    return a+b;
}
console.log(noNegative(2,3)); //run perfect
console.log(noNegative(2,-3)); //undefineddd

// 5. consoling an object property that is not in the  object

const person ={
    name: "sayeed",
    age: 34
}
console.log(person.salery);

// 6. accessing array element outside the array element

const sixth = [2,34,56,7,88];
console.log(sixth[100]);

// 7. deleting an array element

delete sixth[2]; // should not use it , use splice insted
console.log(sixth);

// 8. set a value directly undefined

const eigth = undefined;
console.log(eigth);

const ninth = null;
const data ={ results: [], updated: null};

// console.log(typeof undefined); // gives error

console.log(typeof null);
