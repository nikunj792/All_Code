console.log('I am 3 JS=============================================>');

//As primitive copied by their value.
let a= 10;
let b=a;
a=20;

console.log(a); // 20
console.log(b); //10
 
//******************************************* */
let number = 10;
function increase(number){
number++
}

increase(number);
console.log(number); // 10

//******************************************* */
//As Reference type will copied by their reference.
let obj = {value :10};
function increase1(obj){
    obj.value++;
}
increase1(obj);
console.log(obj); // {value:11}
