window.onload = function() {
  // Menyembunyikan modal alert saat halaman pertama kali dimuat
  document.getElementById("alert-container").style.display = "none";
};

let currentPage = 1;

function nextPage() {
  document.getElementById(`page-${currentPage}`).style.display = "none";
  currentPage++;
  document.getElementById(`page-${currentPage}`).style.display = "block";
}

function forgive(choice) {
  if (choice === 'no') {
    // Menampilkan modal alert saat klik 'Engga'
    document.getElementById("alert-container").style.display = "flex";
  } else if (choice === 'yes') {
    nextPage(); // Fungsi untuk melanjutkan ke halaman berikutnya
  }
}

function closeAlert() {
  // Menyembunyikan modal alert saat tombol 'OK' ditekan
  document.getElementById("alert-container").style.display = "none";
}
