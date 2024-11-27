function add(a ,b){
    const total = a+b;
    console.log(a,b);
    if(b>5){
        const sum = 25 + a+ b;
    }
    else{
        const sum = 5+a+b;
        var current = sum; //hoisting, does not follow block scope
    }
    console.log(current); // we found output
    return total

}

// console.log(a,b); //gives error
// console.log(total); //gives error

 add(5, 7); //works good

 // anything inside 2nd bracket is knows as block scope

print5();
print10();
print11();
 for (var i=0; i< 5; i++){
    console.log(i);
 }
 console.log('outside', i);


 for (let i=0; i< 5; i++){
    console.log(i);
 }
 console.log('outside', i); //gives error because let does not hoist
 function print5(){
    console.log('inside print5',5);
 }
 const print10 =function(){
    console.log('inside print10', 10);
 }
 var print11 =function(){
    console.log('inside print10', 10);
 }







 // More about hoisting

 // var
 console.log(d);
 var d = 5; //undefined