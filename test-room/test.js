var cars = ["Saab", "Volvo", "BMW","Mimi"];
cars[cars.length] =("Oops");
document.write(cars);
var a = cars.length;
function myFunction() {
	var x = Math.floor((Math.random() * (a-1)) );
}
document.write(a);
document.getElementById("demo").innerHTML = cars[x];
