/** @type {import('tailwindcss').Config} */

//* extend คือการ config เพิ่มเติมจาก utilities ที่มีอยู่ จะเป็นการ override utility
//* ถ้าหาก config ใน theme คือการแก้ไข utilities ใหม่ ควรจะกำหนดให้ครบ
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      "sm":"460px",
      "md":"760px",
      "lg":"992px",
      "xl":"1280px"
    },
    extend: {
      colors:{
        'primary':'blue'
      },
      screens:{
        'telephone':'300px',
        'tablet':'400px',
        'computer':'500px',
      },
      spacing:{
        "1":"10px",
        "2":"20px"
      },
    },
  },
  plugins: [],
}