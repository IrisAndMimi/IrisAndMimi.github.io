var cars = ["Saab", "Volvo", "BMW","Mimi"];
cars[cars.length] =("Oops");
document.write(cars);
var a = cars.length;
document.write(a);
function myFunction() {
	var x = Math.floor((Math.random() * a) );
	document.getElementById("rdm-btn").innerHTML = cars[x];
}
function output() {
	var sourceArea = document.getElementById("source_code");
	var editArea = document.getElementById("edit_area");
	sourceArea.innerHTML= editArea.innerHTML;
	cars[cars.length] =editArea.innerHTML;
	document.write(cars);
}
