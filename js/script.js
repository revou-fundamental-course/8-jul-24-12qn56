// Fungsi Kalkulasi BMI
function calculate(){
var number1 = parseInt(document.getElementById("input-berat-badan").value);
var number2 = parseInt(document.getElementById("input-tinggi-badan").value);
let cmToMeter;
let sqHeight;
let calcResult;

// jika null maka akan muncul NaN
if (number1 != null && number2 != null){
  cmToMeter = number2 / 100;
  sqHeight = cmToMeter * cmToMeter;
  calcResult = number1 / sqHeight;
  document.getElementById("calcResultH2").innerHTML = calcResult;
}

}