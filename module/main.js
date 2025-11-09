// Import individual functions
import { tambah, kurang, kali, bagi } from './matematika.js';

// Import the class Kalkulator
import { Kalkulator } from './matematika.js';

// Atau import semua sekaligus
// import * as math from './matematika.js';

console.log('=== Penggunaan Fungsi Import ===');

// Menggunakan function yang diimport
const angka1 = 10;
const angka2 = 5;

console.log(`${angka1} + ${angka2} = ${tambah(angka1, angka2)}`);
console.log(`${angka1} - ${angka2} = ${kurang(angka1, angka2)}`);
console.log(`${angka1} × ${angka2} = ${kali(angka1, angka2)}`);
console.log(`${angka1} ÷ ${angka2} = ${bagi(angka1, angka2)}`);

console.log('\n=== Penggunaan Class Kalkulator ===');

// Menggunakan Class Kalkulator 
const kalkulator = new Kalkulator();

console.log(`Kalkulator tambah: ${kalkulator.hitung('tambah', 15, 3)}`);
console.log(`Kalkulator kurang: ${kalkulator.hitung('kurang', 15, 3)}`);
console.log(`Kalkulator kali: ${kalkulator.hitung('kali', 15, 3)}`);
console.log(`Kalkulator bagi: ${kalkulator.hitung('bagi', 15, 3)}`);

// Contoh error handling
try {
  console.log(`Kalkulator modulo: ${kalkulator.hitung('modulo', 15, 3)}`);
} catch (error) {
  console.error('Error:', error.message);
}

console.log('\n=== Contoh Penggunaan dalam Function ===');

// Membuat function yang menggunakan import
function hitungLuasLingkaran(radius) {
  const pi = 3.14159;
  return kali(pi, kali(radius, radius));
}

function hitungKelilingPersegi(sisi) {
  return kali(4, sisi);
}

console.log(`Luas lingkaran dengan radius 7: ${hitungLuasLingkaran(7)}`);
console.log(`Keliling persegi dengan sisi 5: ${hitungKelilingPersegi(5)}`);

// Export function untuk digunakan di file lain
export function kalkulasiKompleks(a, b, c) {
  // Menggunakan multiple import dalam satu operasi
  const hasil1 = tambah(kali(a, b), c);
  const hasil2 = bagi(kurang(a, b), c);
  
  return {
    operasi1: `(${a} × ${b}) + ${c} = ${hasil1}`,
    operasi2: `(${a} - ${b}) ÷ ${c} = ${hasil2}`
  };
}
