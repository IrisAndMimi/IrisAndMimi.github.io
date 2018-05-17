var usfds = ["漢堡", "義大利麵", "披薩","牛排"];
var chfds = ["火鍋", "陽春麵", "便當","三明治","自助餐","炸物"];
var a = fds.length;
function fdChsn() {
	var us = document.getElementById("Us");
	var ch=document.getElementById('Ch');
	if(us.checked) {
		var fds = usfds;\
	}else if (ch.checked){
		var fds = chfds;
	}
}
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
		document.body.style.backgroundColor= "#97DD27";
	}else if ( (second % 2) == 1){
		document.body.style.backgroundColor= "#00E0E0";
	}
    
});