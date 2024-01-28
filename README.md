# Company Profile with React-vite

## Setup tailwind for react-vite

    Todo:
    1.  npm install -D tailwindcss postcss autoprefixer
    2.  npx tailwindcss init -p
    3.  copas content dari web tailwind
    4.  index.css
        Add the Tailwind directives to your CSS
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
    5.  App.jsx
        - pasang h1 dengan className text-red-500
          untuk memastikan setup tailwind pada react-vite
          yang kita lakukan berhasil
    6.  pengujian pada browser:
        - npm run dev
        - http://localhost:5173/

## configuration font

    Todo:
    1.  public/fonts/CircularStd-Bold.woff
        - simpan font baru
    2.  main.js
        - pasang link google font dari inter(cari di google font)
    3.  index.css
        - pasang layer base
            - padang CircularStd-Bold sebagai font-family
            - sertakan directory dengan url
            - kita mau setiap h1 adalah font CircularStd-Bold
            - kita buat setiap default selain h1 adalah inter(html)
    4.  App.jsx
        - pasang p dan di isi dengan text sembarang
    5.  pengujian pada browser:
        - npm run dev
        - http://localhost:5173/
        - klik inpect element
        - lihat pada h1 default menggunakan Circular
          dan juga p default menggunakan inter
