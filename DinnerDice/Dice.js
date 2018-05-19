/*		內建菜單	*/
var usfds = ["漢堡", "義大利麵", "披薩","牛排"];
var chfds = ["火鍋", "陽春麵", "便當","三明治","自助餐","炸物"];
var krfds = ["拌飯", "水冷麵", "年糕","魚板"];
var jpfds = ["壽司", "生魚片", "烏龍麵","天婦羅","甜不辣","拉麵"];
var sw = ["冰棒", "蛋糕", "飲料","果凍","紅豆湯","沙拉","水果"];
var fds =[];

var usckd = -1;
var chckd = -1;
var krckd = -1;
var jpckd = -1;

/*		有4種食物偏好 可多選		*/
var loc = location.search;
usckd = loc.search(/Us/);
chckd = loc.search(/Ch/);
krckd = loc.search(/Kr/);
jpckd = loc.search(/Jp/);
/*		要加點心不?	*/
var swckd = loc.search(/Sw/);

function menuChecker() {
	if ( (usckd+chckd+krckd+jpckd)==-4){
		alert('請選擇主食');
	}else{
		alert('菜單已更新');	
	}
}

function fdChsn() {
}
function diceClick() {
	if (usckd>0){
		fds=fds.concat(usfds);
	}else{}
	if (chckd>0){
		fds=fds.concat(chfds);
	}else{}
	if (krckd>0){
		fds=fds.concat(krfds);
	}else{}
	if (jpckd>0){
		fds=fds.concat(jpfds);
	}else{}

	/*
	switch (loc){
		case '?fd-sty=Us':
			var fds = usfds;
			break;
		case '?fd-sty=Ch':
			var fds = chfds;
			break;
		case '?fd-sty=Kr':
			var fds = krfds;
			break;
		case '?fd-sty=Jp':
			var fds = jpfds;
			break;
		case '?fd-sty=Sw':
			var fds = swfds;
			break;
		case '?fd-sty=Us&fd-sty=Ch':
			var fds = usfds.concat(chfds);
			break;
		case '?fd-sty=Us&fd-sty=Kr':
			var fds = usfds.concat(krfds);
			break;
		case '?fd-sty=Us&fd-sty=Jp':
			var fds = usfds.concat(jpfds);
			break;
		case '?fd-sty=Us&fd-sty=Sw':
			var fds = usfds.concat(swfds);
			break;
		case '?fd-sty=Ch&fd-sty=Kr':
			var fds = chfds.concat(krfds);
			break;
		case '?fd-sty=Ch&fd-sty=Jp':
			var fds = chfds.concat(jpsfds);
			break;
		
		default :
			alert('請選擇偏好的食物風格!');
			break;
	}
	*/
	var x = Math.floor( ( Math.random()*(fds.length) ) );
	if (swckd==-1){
		document.getElementById("Dice-rdm").innerHTML = fds[x];
	}else{
		var y = Math.floor( ( Math.random()*(sw.length) ) );
		document.getElementById("Dice-rdm").innerHTML = fds[x]+"+"+sw[y];
	}
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
function washTheme() {
	var second = new Date().getSeconds();
	if ( (second % 4) == 0){
		document.body.style.backgroundColor= "#B57EDC";
	}else if ( (second % 4) == 1){
		document.body.style.backgroundColor= "#00E0E0";
	}else if ( (second % 4) == 2){
		document.body.style.backgroundColor= "#97DD27";
	}else if ( (second % 4) == 3){
		document.body.style.backgroundColor= "#DEB887";
	}
}
