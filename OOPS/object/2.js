console.log('I am 2 JS=======================================>');

let x ={};

//let x = new Object();  This will happen under the hood.

new String(); // '', "", ``
new Boolean(); // true , false
new Number(); // 1,2,3,...

//Function creation using function constructor method.

const Circle1 = new Function('radius',`
this.radius=radius,
this.draw=function(){
console.log('Inside the function');
}
`);
const functionConstructor = new Circle1(1);

//Adding properties to an existing object.

functionConstructor.location={x:1};
functionConstructor['name'] = 'Nikunj';

//Removing the properties from an existing object.
delete functionConstructor['name'];

delete functionConstructor.name;

console.log(functionConstructor.draw());
console.log(functionConstructor);


