/* Type JavaScript below */
var cruz = document.getElementById("cruz");
var GS = document.getElementById("GS");
var distance = document.getElementById("dist");
var oil = document.getElementById("fuel");
var tod = document.getElementById("tod");
var vertSpeed = document.getElementById("verts");
var fuelNeeded = document.getElementById("fuelneed");

// <-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- >

function ToD() {
  var desc = cruz.value / 10 * 3 + 10;
  tod.innerHTML = Math.floor(desc) + " nm";
  // alert("hello");
}

function vS() {
  vertSpeed.innerHTML = GS.value / 2 * 10 + " ft/min";
}

function fuelNeed() {
  var fuel = distance.value / GS.value * oil.value * 2 + 12000 + 2000;
  fuelNeeded.innerHTML = Math.floor(fuel) + " lbs";
}

function start() {
  ToD();
  vS();
  fuelNeed();
}
