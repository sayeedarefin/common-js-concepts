/*
Truthy
1. true
2. any number +ve -ve will be truthy other than zero
3. any string other than empty string
4. '0' , 'false'
5. {} empty object
6. [] empty array


Falsy
1. false
2. 0
3. ''
4. undefined
5. null
6. empty string
*/

const x = false;
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}


//optional
// check falsy

const y = '';
if (!y){
    console.log('value is falsy');
}

//check truthy
const z = ' ';
if(!!z){
    console.log('value is truthy');

}