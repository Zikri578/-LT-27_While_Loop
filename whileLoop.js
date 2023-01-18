let number = 1;
while (number <= 58) {
    if (number % 2 == 0) {
        console.log(`${number} adalah bilangan ganjil`);
    } else {
        console.log(`${number} adalah bilangan genap`);
    }
    number++;
}

// 
let hasil = prompt('Masukkan angka : ');
while (hasil < 100) {
    if (hasil % 2 == 0) {
        document.writeln(`${hasil} adalah bilangan genap`);
        break;
    } else {
        document.writeln(`${hasil} adalah bilangan ganjil`);
        break;
    }
}