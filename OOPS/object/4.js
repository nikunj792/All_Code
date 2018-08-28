console.log('I am 4 JS=============================================>');

function Circle2(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Constructor draw', radius)
    }
}
const geometry = new Circle2(1);

//It will return us both properties and methods.
for(let key in geometry){
    if(typeof geometry[key] != 'function')
    console.log(key, geometry[key]);
}

//Another way for the same.

const keys = Object.keys(geometry);
console.log(`Keys using Object.keys ${keys}`);

if('radius' in geometry){
    console.log('Property is Present')
}

const arr = [1,2,43,4,5];
const key = Object.keys(arr);
console.log(`Object.keys for array is ${key}`);