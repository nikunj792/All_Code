console.log('I am Index JS==============================>');
//Emp is a unit called object with some property and
var emp ={
    baseSalary:30000,
    overTime:20000,
    rate:20,
    getWage: function(){
        return this.baseSalary+(this.overTime*this.rate);
    }
}

console.log('wage is ',emp.getWage());
