console.log('I am Inherit => iteration JS=============================================>');

function Math(radius){

    //Instance Members
    this.radius = radius;
    this.move= function(){
        console.log('move');
    }
}

const c1 = new Math();

//Prototype Members.

Math.prototype.draw = function(){
    console.log('draw');
}
//Object.keys(c1) will return you only instance members.
console.log('Object.keys returing only instance members ', Object.keys(c1));

for(let key in c1)
console.log('for in loop will return all members instance as well as prototype====>', key);