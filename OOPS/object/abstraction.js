console.log('I am abstraction JS=============================================>');

//In this case every property and method is available in outer scope.
/*
    function Abstract(radius){
        this.radius = radius;
        this.defaultLocation={x:1,y:2};
        this.computeOptimumLocation= function(){
        console.log('complejbewhjbew');
        }
        this.draw= function(){
            this.computeOptimumLocation();
            console.log('Abstraction');
        };
    };

    const object = new Abstract(1);
    object.draw();
*/

//For the solution of above problem , we will use abstraction.

function Abstract(radius){
    this.radius = radius;

    let defaultLocation={x:1,y:2};

    // let computeOptimumLocation= function(factor){
    // console.log('Compute Optimum Location', factor);
    // }
    // this.getDefaultLocation = function(){
    //     return defaultLocation();
    // }
    this.draw= function(){

       // computeOptimumLocation(12);
        console.log('Abstraction');
    };

    Object.defineProperty(this, 'defaultLocation'
    ,{get: function(){
        return defaultLocation;
    }
    },{set: function(value){
        console.log('sdasdsadsa');
        if(!value.x || !value.y){
            throw new Error('Invalid value');
        }
        defaultLocation = value
    }})
};

const object = new Abstract(1);
console.log(`Getting the private method value after getter method using Object.defineProperty` ,object.defaultLocation);
object.defaultLocation = {x:21,y:34};
console.log(`Getting the private method value after setter method using Object.defineProperty` ,object);
// object.draw();

//One way to call the private methods of objects or we can say local variables.
// object.getDefaultLocation();  // For line 31 code







