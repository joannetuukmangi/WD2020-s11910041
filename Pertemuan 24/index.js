//Array
let nilai = [90, 80, 75, 95, 85];

for (let i=0; i<nilai.length; i++)
{
    console.log("Nilai = ", nilai[i] +5);
}
console.log(nilai);
// nilai[2]=90;
// console.log(nilai[nilai.length - 1]);

let John = ["John", "Doe", 33, true];
console.log(John [John.length -1]);
console.log(John);

//toString()
console.log(John.toString());

//join
console.log(John.join(" - "));

//pop()
John.pop();
console.log(John.join(" - "));
//push()
John.push(true);
John.push("Hello");
console.log(John.join(" - "));
//shift()
John.shift();
console.log(John.join(" - "));
//unshift()
John.unshift("John");
John.unshift("Prof");
console.log(John.join(" - "));

//splice()
let nama = ["Elen", "Eca", "Bella", "Joanne", "Juan"];

nama.splice(3, 0, "Charlie", "Ferlien")
console.log(nama);

//concat()
let buah = ["Durian", "Nangka", "Jeruk"];
let biji = ["Kacang Tanah,", "Kedelai", "Kacang Polong"];
let sayur = ["Tomat", "Kentang", "Wortel"];

let makanan = buah.concat(biji, sayur);
console.log(makanan)

//slice()
let hewan = ["Kelinci", "Kucing", "Harimau", "Ayam", "Bebek"];
let kakiEmpat = hewan.slice(0,3);
let kakiDua = hewan.slice(3);

console.log(kakiEmpat);
console.log(kakiDua);

//sort()
let angka = [25, 80, 100, 15, 45];

angka.sort();
console.log(angka);

let urutTerkecil = function (a, b) {
    return a - b;
}
let urutTerbesar = function (a, b) {
    return b - a;
}
console.log(angka.sort(urutTerkecil));
console.log(angka.sort(urutTerbesar));

//reverse()
let bilangan = [125, 300, 210, 150, 270];
bilangan.reverse()
console.log(bilangan);

bilangan.sort().reverse();
console.log(bilangan);