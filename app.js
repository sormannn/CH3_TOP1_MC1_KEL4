// Import modul readline untuk menerima input dari pengguna
const readline = require('readline');

// Import modul calculator
const calculator = require('./calculator');

// Membuat interface untuk membaca input dari pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menjalankan kalkulator
function runCalculator() {
  // Meminta input dari pengguna
  rl.question('Masukkan operasi aritmatika (contoh: 5 + 3): ', (input) => {
    // Memecah input menjadi angka dan operator
    const [num1, operator, num2] = input.split(' ');

    // Mengonversi string angka menjadi bilangan bulat
    const a = parseInt(num1);
    const b = parseInt(num2);

    let result;
    // Memilih operasi aritmatika yang sesuai
    switch (operator) {
      case '+':
        result = calculator.add(a, b);
        break;
      case '-':
        result = calculator.subtract(a, b);
        break;
      case '*':
        result = calculator.multiply(a, b);
        break;
      case '/':
        result = calculator.divide(a, b);
        break;
      case '%':
        result = calculator.modulo(a, b);
        break;
      default:
        result = 'Invalid operator';
    }

    // Menampilkan hasil operasi aritmatika
    console.log('Hasil:', result);

    // Menjalankan kalkulator lagi atau menutup interface
    rl.question('Apakah Anda ingin menjalankan kalkulator lagi? (y/n): ', (answer) => {
      if (answer.toLowerCase() === 'y') {
        // Jika pengguna ingin melanjutkan, jalankan kalkulator lagi
        runCalculator();
      } else {
        // Jika tidak, tutup interface dan keluar dari program
        rl.close();
      }
    });
  });
}

// Memulai kalkulator
runCalculator();
