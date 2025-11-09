// matematika.js
export const tambah = (a, b) => a + b;
export const kurang = (a, b) => a - b;
export const kali = (a, b) => a * b;

// Or with declarations
export function bagi(a, b) {
  return a / b;
}

export class Kalkulator {
  hitung(operasi, a, b) {
    switch (operasi) {
      case 'tambah':
        return tambah(a, b);
      case 'kurang':
        return kurang(a, b);
      case 'kali':
        return kali(a, b);
      case 'bagi':
        return bagi(a, b);
      default:
        throw new Error(`Operasi '${operasi}' tidak didukung`);
    }
  }
}
