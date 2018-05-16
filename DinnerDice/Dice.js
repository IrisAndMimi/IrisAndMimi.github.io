var fds = ["Saab", "Volvo", "BMW","Mimi"];
var a = fds.length;
function myFunction() {
	var x = Math.floor((Math.random() * a) );
	document.getElementById("Dice-rdm").innerHTML = fds[x];
	}

function output() {
	var sourceArea = document.getElementById("source_code");
	var editArea = document.getElementById("edit_area");
	sourceArea.innerHTML= editArea.innerHTML;
	fds[fds.length] =editArea.innerHTML;
	document.getElementById("now-string").innerHTML = fds;
}
