function func(name,city){
	console.log("111111",this);
	this.name = name;
	this.city = city;
}

var sample =  func("Nikunj","Bangalore");
console.log("222222222",sample);