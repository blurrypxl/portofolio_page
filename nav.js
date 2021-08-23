// Mengambil data selector .toggle didalam style css, kemudian buat event listener dengan argument click dan callback fungsi toggleBtn.
document.querySelector('.toggle').addEventListener('click', () => {
  // Memanggil fungsi toggleBtn dan isi argument dengan data selector didalam style css.
  toggleBtn(document.querySelector('.nav-mobile'));
  toggleBtn(document.querySelector('.toggle'));
});

// Mengambil argument pada query selector dengan fungsi toggleBtn dengan paramenter element.
function toggleBtn(elementToggle) {
  elementToggle.classList.toggle('open'); // Memanggil list class name pada selector .open, dan toggle (aktifkan/non-aktifkan) selector open didalam style css.
}

// Membuat event scroll pada window aktif dibrowser
window.onscroll = () => {
  navScrolling(document.getElementById('navbar'));
};

// Fungsi untuk membuat navbar merubah background saat di scroll
function navScrolling(elementScroll) {
  if (document.documentElement.scrollTop > 20) {
    elementScroll.className = "scroll";
  }
  else if (document.documentElement.scrollTop < 20) {
    elementScroll.className = null;
  }
}
