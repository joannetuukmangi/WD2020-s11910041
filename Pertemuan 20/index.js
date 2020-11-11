//Variable

//let & const
// let _umur = 25;
// _umur = 26;
// let nilai = 95.5;
// let sudahMenikah = true;
// let $nama="John Doe";
// console.log(_umur);
// console.log($nama);
// console.log(nilai);
// console.log(sudahMenikah);

// let alamat;
// console.log(alamat);

// const tahunLahir = 2010;
// console.log(tahunLahir);

//Operator

//Arithmetic Operator {+,-,*,/}

// let umur=30;
// let angka1 = 10;
// let angka2 = 20;
// console.log(angka1 + angka2);

// let namaDepan = "John";
// let namaBelakang = "Doe";
// console.log("Nama Saya " + namaDepan + " " + namaBelakang + ". Umur saya adalah " + umur + " tahun");

//Operator Perbandingan

// let angka1 = 10;
// let angka2 = 9;

// console.log(angka1 <= angka2);

//ternary operator
// let angka = 5;
// let hasil = angka <= 0 ? "Negatif" : "Positif";
// console.log(hasil);

//Operator Logika
// let kondisi1 = 1 < 2;
// let kondisi2 = true;

// console.log(kondisi1 || kondisi2);
// console.log(!kondisi1);

// let angka = prompt("Masukkan Angka : ");
// console.log("angka yang dimasukkan adalah " + angka);

//Exercise 7
/*
Buatlah program JavaScript untuk menghitung BMI (Body Mass Index).
Rumus = berat (kg) / (tinggi * tinggi)
Gunakan prompt untuk meminta input dari user
*/

//Assignment Menghitung BMI dan Kategori

let berat = prompt("Masukkan Berat Badan Anda (kg) : ");    
console.log( "Berat Anda adalah " + berat + " kg");
let tinggi = prompt("Masukkan Tinggi Badan Anda (m) : ");
console.log("Tinggi Anda adalah " + tinggi + " m");
let hasil = berat / (tinggi * tinggi);
console.log("BMI Anda = " + hasil);
function bmiTable(){
 if (hasil <= 18.5){
     console.log ("Underweigth");
 }
 else if (hasil >= 18.5 && hasil <= 24.9){
     console.log ("Normal Range");
 }
 else if (hasil >= 25.0 && hasil <=29.9){
    console.log ("Overweigth/Preobese");
 }
 else if (hasil == 30.0){
     console.log ("Obese");
 }
 else if (hasil >=30.0 && hasil <=34.9){
     console.log ("Class I");
 }
 else if (hasil >=35.0 && hasil <= 39.9){
     console.log ("Class II");
 }
 else if (hasil >=40.0){
     console.log ("Class III");
 }
}
bmiTable();