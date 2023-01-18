# -LT-27_While_Loop

While loop dalam JavaScript adalah perulangan yang digunakan untuk mengeksekusi blok kode tertentu berulang kali sampai kondisi yang ditentukan bernilai false. Struktur dasar dari while loop adalah sebagai berikut:

    while (kondisi) {
      // kode yang akan diulang
    }

Selama kondisi yang ditentukan bernilai true, blok kode di dalam while loop akan dijalankan. Setelah setiap iterasi, kondisi akan dievaluasi kembali. Proses ini akan terus berlangsung sampai kondisi bernilai false. Contoh penggunaan while loop dalam JavaScript:

    var i = 0;
    while (i < 5) {
      console.log(i);
      i++;
    }

Dalam contoh di atas, while loop akan dijalankan sebanyak 5 kali dan menampilkan nilai dari variabel i di console setiap iterasinya. While loop sangat berguna dalam mengeksekusi kode berulang kali sesuai dengan kondisi yang ditentukan, namun penting untuk menentukan kondisi dan increment/decrement dengan benar agar tidak menyebabkan infinite loop atau kesalahan lain dalam aplikasi.

While loop dapat digunakan dengan kondisi yang sama dengan for loop, namun while loop lebih cocok digunakan dalam kondisi yang tidak dapat ditentukan jumlah pengulangannya atau kondisi yang tidak dapat ditentukan sebelum pengulangan dimulai.

Selain itu, while loop juga dapat digabungkan dengan perintah do-while loop. Do-while loop mirip dengan while loop, namun perbedaannya adalah do-while loop akan dijalankan setidaknya sekali sebelum kondisi dievaluasi. Struktur dasar dari do-while loop adalah sebagai berikut:

    do {
      // kode yang akan diulang
    } while (kondisi);

Pada saat pertama kali do-while loop dijalankan, blok kode di dalam do-while loop akan dijalankan setidaknya sekali, setelah itu kondisi akan dievaluasi. Selama kondisi yang ditentukan bernilai true, blok kode di dalam do-while loop akan dijalankan. Setelah setiap iterasi, kondisi akan dievaluasi kembali. Proses ini akan terus berlangsung sampai kondisi bernilai false. Contoh penggunaan do-while loop dalam JavaScript:

    var i = 0;
    do {
      console.log(i);
      i++;
    } while (i < 5);

Dalam contoh di atas, do-while loop akan dijalankan sebanyak 5 kali dan menampilkan nilai dari variabel i di console setiap iterasinya. Perbedaan antara while loop dan do-while loop adalah kondisi akan dievaluasi sebelum atau setelah blok kode dijalankan, namun dua jenis loop ini memiliki fungsi yang sama yaitu untuk melakukan pengulangan sampai kondisi yang ditentukan bern
