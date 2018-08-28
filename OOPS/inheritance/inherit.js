console.log('I am Inheirt JS=============================================>');
let person ={name :'Nikunj' };

Object.defineProperty(person,'name',{
    writable: false,
    enumerable: true,
    configurable: false
});

person.name='Agarwal';
delete person.name;
console.log('After setting writable property as false',person );
console.log('After setting enumerable property as false',Object.keys(person));
console.log('After setting configurable property as false',person);

let objectBase = Object.getPrototypeOf(person);
console.log('object base is ',objectBase);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log('object descriptor', descriptor);

for(let key in person)
console.log(key);
