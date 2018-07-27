var cars = ["Saab", "Volvo", "BMW","Mimi"];
cars[cars.length] =("Oops");
var a = cars.length;
document.write('<p class="esteg">當前字串長度為:'+a+'</p>');
function myFunction() {
	var x = Math.floor((Math.random() * a) );
	document.getElementById("rdm-rslt").innerHTML = '產生結果:	'+cars[x];
}
function output() {
	var sourceArea = document.getElementById("source_code");
	var editArea = document.getElementById("edit_area");
	sourceArea.innerHTML= editArea.innerHTML;
	cars[cars.length] =editArea.innerHTML;
	document.getElementById("now-string").innerHTML = cars;
}
if(window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(event) {
    var a = document.getElementById('alpha'),
        b = document.getElementById('beta'),
        g = document.getElementById('gamma'),
        alpha = event.alpha,
        beta = event.beta,
        gamma = event.gamma;

    a.innerHTML = Math.round(alpha);
    b.innerHTML = Math.round(beta);
    g.innerHTML = Math.round(gamma);

  }, false);
}else{
  document.querySelector('#alpha').innerHTML = '你的瀏覽器不支援呦OAQ';
}
