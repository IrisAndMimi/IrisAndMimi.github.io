var cars = ["Saab", "Volvo", "BMW","Mimi"];
cars[cars.length] =("Oops");
document.write(cars);
var a = cars.length;
document.write(a);
function myFunction() {
	var x = Math.floor((Math.random() * a) );
	document.getElementById("rdm-btn").innerHTML = cars[x];
}

document.getElementById("edit_area").contentEditable = true ;
function output() {
  var sourceArea = document.getElementById("source_code");
  var editArea = document.getElementById("edit_area");
  sourceArea.innerHTML= editArea.innerHTML;
}
