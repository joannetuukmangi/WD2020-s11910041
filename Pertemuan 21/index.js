console.log("Basic JavaScript");

//Conditional JavaScript

// let firstName = "John";
// let isMarried = true;

// if(isMarried){
//     console.log(firstName + " is married");
// } else{
//     console.log(firstName + " is not married");
// }

/*
Jika umur < 13 tahun maka tampilkan kategori anak - anak
Jika umur 13 sampai 16 tahun tampilkan kategori remaja
Jika umur 17 sampai 25 tahun tampilkan kategori anak muda
Jika umur 26 sampai 50 tahun tampilkan kategori orang dewasa
*/

// let umur = 25;

// if(umur < 13){
//     console.log ("Kategori anak - anak");
// } else if (umur >=13 && umur < 17){
//     console.log ("Kategori remaja");
// } else if (umur >=17 && umur < 25){
//     console.log ("Kategori anak muda");
// } else if (umur >=25 && umur < 50 ){
//     console.log ("Kategoi Dewasa");
// }

// let firstName = "John";
// let job = "teacher";

// switch (job){
//     case "teacher" : 
//     console.log (firstName + " is a teacher");
//     break;
//     case "driver" :
//     console.log (firstName + " is a driver");
//     break;
//     case "instructor" :
//     console.log (firstName + " is a instructor");
//     break;
//     default :
//     console.log (firstName + " does something else");
//     break;
// }

// let umur = 25;

// if(umur < 13){
//     console.log ("Kategori anak - anak");
// } else if (umur >=13 && umur < 17){
//     console.log ("Kategori remaja");
// } else if (umur >=17 && umur < 25){
//     console.log ("Kategori anak muda");
// } else if (umur >=25 && umur < 50 ){
//     console.log ("Kategoi Dewasa");
// }

// switch (true)
// {
//     case umur < 13 :
//     console.log ("Kategori anak - anak");
//     break;
//     case umur >=13 && umur < 17 :
//     console.log ("Kategori remaja");
//     break;
//     case umur >=17 && umur < 25 :
//     console.log ("Kategori anak muda");
//     break;
//     case umur >=25 && umur < 50 :
//     console.log ("Kategoi Dewasa");
//     break;
// }

//JavaScript Function


function helloWorld(){
console.log("Hello World function declaration");
}

//let age == 33 //lingkup global

// let helloWorld = function (nama){ //parameter
//     let age = 33; //lingkup lokal
//     console.log("Hello " + nama + ". Umur saya adalah " + age + " tahun.");
// }; //function dalam bentuk ekspresi

helloWorld("Stenly Adam"); //argument


const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi';
  const noMessi = 10;
  console.log(olahraga); // Output: basketball
  if (olahraga === 'basketball') {
     atlet = 'Kobe Bryant';
     const noKobe = 24;
     console.log(olahraga); // Output: basketball
  }
  return atlet;
}

console.log(namaAtlet()); // Output: Kobe Bryant
console.log(olahraga); // Output: basketball