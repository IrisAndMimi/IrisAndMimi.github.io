var fds = ["Saab", "Volvo", "BMW","Mimi"];
var a = fds.length;
function diceClick() {
	var x = Math.floor((Math.random() * a) );
	document.getElementById("Dice-rdm").innerHTML = fds[x];
	}
function chgBkgd() {
	document.bgColor="#00E0E0";
	}
function output() {
	var sourceArea = document.getElementById("source_code");
	var editArea = document.getElementById("edit_area");
	sourceArea.innerHTML= editArea.innerHTML;
	fds[fds.length] =editArea.innerHTML;
	document.getElementById("now-string").innerHTML = fds;
}
$(document).ready(function()
{
    $('#bkgd-lavender, #bkgd-dirtaqua').hide(); 
    second = new Date().getSeconds();
    if ((second % 2) == 0) $('#bkgd-lavender').show();
    if ((second % 2) == 1) $('#bkgd-dirtaqua').show();
});