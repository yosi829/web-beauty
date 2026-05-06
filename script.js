// FORM SUBMIT
document.getElementById("resellerForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Pendaftaran berhasil! Kami akan menghubungi Anda.");
});

// DOWNLOAD GAMBAR
function downloadImage(url) {
  const link = document.createElement('a');
  link.href = url;
  link.download = "produk.jpg";
  link.click();
}

// HITUNG PROFIT
function hitungProfit() {
  const qty = document.getElementById("qty").value;

  const profitPerItem = 50000; // contoh margin
  const total = qty * profitPerItem;

  document.getElementById("result").innerText =
    "Estimasi Profit: Rp " + total.toLocaleString("id-ID");
}
