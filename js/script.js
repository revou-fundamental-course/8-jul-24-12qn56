// Fungsi Kalkulasi BMI
function calculate(){
var number1 = parseInt(document.getElementById("input-berat-badan").value);
var number2 = parseInt(document.getElementById("input-tinggi-badan").value);
let cmToMeter;
let sqHeight;
let calcResult;
var calcSituation = "";

// jika null maka akan muncul NaN
if (number1 != null && number2 != null){
  cmToMeter = number2 / 100;
  sqHeight = cmToMeter * cmToMeter;
  calcResult = number1 / sqHeight;

  // Limit result ke 4 angka
  calcResult = calcResult.toFixed(2);

  document.getElementById("calcResultH2").innerHTML = calcResult + " " + "kg/m2";
}

// mencari situasi berat badan
if(calcResult >= 30) calcSituation ="Anda Kegemukan (Obesitas)" + "<br>" + "<p>Hasil BMI lebih dari 25</p>" + "<p>Anda berada dalam kategori obesitas. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.</p>"
else if(calcResult >= 25) calcSituation ="Anda Memiliki Berat Badan Berlebih"  + "<br>" + "<p>Hasil BMI diantara 23 dan 25</p>" + "<p>Anda berada dalam kategori overweight atau berat badan berlebih Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.</p>"
else if(calcResult >= 18) calcSituation ="Anda Memiliki Berat Badan Normal" + "<br>" + "<p>Hasil BMI diantara 18.5 dan 22.9</p>" + "<p>Anda berada dalam kategori berat badan yang normal. Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.</p>"
else if(calcResult >= 0) calcSituation ="Anda Kekurangan Berat Badan" + "<br>" + "<p>Hasil BMI < 18.5</p>" + "<p>Anda berada dalam kategori kekurangan berat badan. Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.</p>"
document.getElementById("calcSituationP").innerHTML = calcSituation;
}