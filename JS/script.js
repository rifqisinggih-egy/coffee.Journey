// dibawah ini kode dari orang pintar saya blm paham
// toogle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika garis3menu di klik
document.querySelector("#garis3menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar untuk hilangakan menu garis 3
const hamburger = document.querySelector("#garis3menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// ini untuk aktifkan kirim pesa langsung ke wa gais, ada versi email tapi males mending wa awokwowk
// ini alur nya ges = 1. User isi form 2. Klik Kirim 3. JavaScript ambil data 4. Buat link WhatsApp 5. Buka WhatsApp di tab baru 6. Form dikosongkan.
const contactForm = document.querySelector("#contact-form"); //untuk "menangkap" elemen HTML yang memiliki ID #contact-form

contactForm.addEventListener("submit", function (event) {
  //Program akan "mendengarkan" atau menunggu sampai pengguna menekan tombol submit.
  event.preventDefault(); //Fungsi ini mencegah refresh halaman agar js dulu yg mikir gais

  //ini untuk mengambil value yg user ketik di kolom contact
  const nama = document.getElementById("nama-user").value;
  const mail = document.getElementById("email-user").value;
  // const nomer = document.getElementById("nomer-user").value;

  console.log(nama, mail); // untuk function active

  // kita masuk ke ranah WA direct link dan pesan
  // note : %0A untuk membuat baris baru (Enter)
  const noWa = "628992247100";
  const pesan =
    `hello buddy my name is ${nama} %0A%0A` +
    `My email ${mail} %0A` +
    `I really intrested with your coffee journey`;

  const url = `https://wa.me/${noWa}?text=${pesan}`;

  window.open(url, "_blank"); //untuk aktif kan function di lembar baru

  contactForm.reset(); //untuk mengosongkan kembali semua kolom input di form agar bersih seperti semula
});
