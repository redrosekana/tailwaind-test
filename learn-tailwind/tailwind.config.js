/** @type {import('tailwindcss').Config} */
/* extend คือการ config เพิ่มเติมจาก utilities ที่มีอยู่ */
/* ถ้าหาก congig นอก extend คือการแก้ไข utilities ใหม่ */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors:{
        'kanatest':'red'
      },
      screens:{
        'small':'300px',
        'medium':'400px',
        'large':'500px',
      },
    },
  },
  plugins: [],
}
