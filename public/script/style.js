function changeImg(element) {
    const flipper = element.querySelector('.flipper');

    // Tambahkan atau hapus kelas flip untuk memutar elemen
    flipper.classList.toggle('flip');

    // Tunggu hingga setengah transisi selesai sebelum mengganti gambar
    setTimeout(() => {
        const frontImg = element.querySelector('.front img');
        const backImg = element.querySelector('.back img');

        // Swap the image sources
        if (flipper.classList.contains('flip')) {
            frontImg.src = '/public/assets/ezgif-2-d18009072f.gif'; // Gambar baru
            backImg.src = 'assets/2301010032.jpg';
             // Gambar asli
        } else {
            frontImg.src = 'assets/2301010032.jpg'; // Gambar asli
            backImg.src = '/public/assets/ezgif-2-d18009072f.gif'; // Gambar baru
        }
    }, 300); // Waktu setengah dari durasi transisi (0.6s / 2)


}
