var fds = ["Saab", "Volvo", "BMW","Mimi"];
var a = fds.length;
var bg=document.getElementById('container').value;
function diceClick() {
	var x = Math.floor( (Math.random() * a) );
	document.getElementById("Dice-rdm").innerHTML = fds[x];
}
function chgBgLvdr() {
		document.body.style.backgroundColor= "#B57EDC";	
}
function chgBgDrtaq() {
		document.body.style.backgroundColor= "#00E0E0";	
}
function chgBgWsab() {
		document.body.style.backgroundColor= "#97DD27";	
}
function chgBgBlywd() {
		document.body.style.backgroundColor= "#DEB887";	
}
	
function output() {
	var sourceArea = document.getElementById("source_code");
	var editArea = document.getElementById("edit_area");
	sourceArea.innerHTML= editArea.innerHTML;
	fds[fds.length] =editArea.innerHTML;
	document.getElementById("now-string").innerHTML = fds;
}
$(document).ready( function()
{
    var second = new Date().getSeconds();
    if ( (second % 2) == 0){
		document.body.style.backgroundColor= "#B57EDC";
	}else if ( (second % 2) == 1){
		document.body.style.backgroundColor= "#00E0E0";
	}
    
});