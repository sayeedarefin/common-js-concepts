//  function kitchen(){
//     let roast =0;
//     return function(){
//         roast++;
//         return roast;
//     }

//  }

//  const firstserver = kitchen();
//  console.log(firstserver); // throws anonymous
//  console.log(firstserver());
//  console.log(firstserver());
//  console.log(firstserver());
//  console.log(firstserver());



//  function outerFunction(){
//     let count = 0; // a variable inside the outer function scope
//     function innerFunction(){
//         count++; // access the outer variable and changes it
//         console.log(count);
//     }
//     return innerFunction;
//  }

//  const myClosure = outerFunction();
//  myClosure();
//  myClosure();
//  myClosure();

// function createGreeting(name){
//     return function(){
//         console.log(`Hello! ${name}`);
//     };
// }

// const greetJohn = createGreeting('John');
// const greetsayeed = createGreeting('sayeed');

// greetJohn();
// greetsayeed();




function stopwatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

const watch1 = stopwatch();

watch1();
watch1();
watch1();