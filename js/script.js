function Luas() {
  var alas = parseInt(document.getElementById("alas").value);
  var tinggi = parseInt(document.getElementById("tinggi").value);

  document.getElementById("hasil_Lu").placeholder = 0.5 * alas * tinggi;
}

document.getElementById("hitung1").addEventListener("click", Luas);

function Keliling() {
  var a = parseInt(document.getElementById("sisi_a").value);
  var b = parseInt(document.getElementById("sisi_b").value);
  var c = parseInt(document.getElementById("sisi_c").value);

  document.getElementById("hasil_Kel").placeholder = a + b + c;
}

document.getElementById("hitung2").addEventListener("click", Keliling);

function reset1() {
    document.getElementById("hasil_Lu").placeholder= "Hasil";
}
document.getElementById("reset1").addEventListener("click", reset1)

function reset2() {
    document.getElementById("hasil_Kel").placeholder= "Hasil";
}
document.getElementById("reset2").addEventListener("click", reset2)

function dark() {
    var e = document.body;
    e.classList.toggle("darkmode");
  }