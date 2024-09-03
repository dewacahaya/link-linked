
# Instalasi Tailwind CSS

## Tailwind CLI

 - [Buka website resmi tailwind css](https://tailwindcss.com/)
 - [Jalankan perintah instalasi via CLI ](https://tailwindcss.com/docs/installation)
 - Perintah pertama ganti dengan 
    - ` npm install -D tailwindcss postcss autoprefixer `
- Konfigurasi path template pada file tailwind.config.js
    ```bash
        /** @type {import('tailwindcss').Config} */
            module.exports = {
                content: ["./folder/folder-lain/file.{html, js}"],
                theme: {
                    extend: {},
                },
                plugins: [],
            }
    ```
- Tambahkan Tailwind directive ke file css (buat file css baru)
    ```bash
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    ```
- Jalankan perintah dibawah untuk mulai menggunakan Tailwindcss
    ```bash
        npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
    ```
    Sesuaikan path dengan kebutuhan dan keinginan

    ## Tailwind CSS sudah bisa digunakan
