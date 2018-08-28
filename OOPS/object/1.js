console.log('I am 1 JS==============================>');

//object litreal Syntax for creating object.
const circle ={
    radius:1,   //These are properties.
    location:{
        x:1,
        y:1
    },
    draw: function(){       //This is method.
        console.log('Literal draw');
    }
};
console.log(circle.draw());

//Object creation using Factory function.

function createCircle(radius){
    return {
        radius, 
        draw: function(){
            console.log('Factory draw');
        }
    };
};

const circleFactory = createCircle(1);
console.log(circleFactory.draw());

// Object creation using constructor function(first alphabet as capital.

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Constructor draw', radius)
    }
}
const another = new Circle(1);
console.log(another.draw());

//This expression is same as before 38, {} object to create empty object
Circle.call({},23);
//This is same as call method means to call the function.
Circle.apply({},[54])

