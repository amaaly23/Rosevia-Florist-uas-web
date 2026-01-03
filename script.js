function updateClock(){
  const el = document.getElementById("clock");
  if(!el) return;

  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');

  let greet = "Selamat Datang";
  const hour = now.getHours();
  if(hour >= 4 && hour < 11) greet = "Selamat Pagi";
  else if(hour >= 11 && hour < 15) greet = "Selamat Siang";
  else if(hour >= 15 && hour < 18) greet = "Selamat Sore";
  else greet = "Selamat Malam";

  el.textContent = `${greet} • ${h}:${m}:${s}`;
}

setInterval(updateClock, 1000);
updateClock();

// Demo tombol order (tanpa backend)
function orderNow(productName){
  alert(`Terima kasih! Pesanan "${productName}" dicatat (demo).\nSilakan isi form di menu Kontak untuk pemesanan lengkap.`);
}