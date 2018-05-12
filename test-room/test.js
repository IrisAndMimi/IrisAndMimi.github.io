var cars = ["Saab", "Volvo", "BMW","Mimi"];
cars[cars.length] =("Oops");
document.write(cars);
var a = cars.length;
document.write(a);
function myFunction() {
	var x = Math.floor((Math.random() * a) );
	document.getElementById("demo").innerHTML = cars[x];
}

