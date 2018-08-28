console.log('I am Inherit =>1 JS=============================================>');

function Geometry(radius){
    //Instance Members
    this.radius=radius;
    this.perimeter = function(){
        this.area();
        console.log('perimeter');
    }
}

//To put the area method inside the prototype , so that 
// it will not create the instance on every new object. 

//Prototype Members
Geometry.prototype.area = function(){
    console.log('area');
}

Geometry.prototype.toString = function(){
    return 'Circle with radius '+ this.radius;
}

const first = new Geometry(12); // This will keep area reference if that is define inside the method.
const second = new Geometry(13);//This will keep area reference if that is define inside the method.

console.log('Prototype of Geometry is ', Object.getPrototypeOf(Geometry));
console.log('Prototype of First Object is ', Object.getPrototypeOf(first));

