const orderForm = document.getElementById('orderForm');
const packageInput = document.getElementById('package');
const priceInput = document.getElementById('price');
const contactBtn = document.getElementById('contactBtn');
const checkoutForm = document.getElementById('checkoutForm');

function showOrder(pack, price) {
  packageInput.value = pack;
  priceInput.value = `Rp ${price}`;
  orderForm.scrollIntoView({ behavior: 'smooth' });
}

contactBtn.addEventListener('click', () => {
  orderForm.scrollIntoView({ behavior: 'smooth' });
});

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nickname = document.getElementById('nickname').value.trim();
  const whatsapp = document.getElementById('whatsapp').value.trim();
  const pack = packageInput.value;
  const price = priceInput.value;

  if (!nickname || !whatsapp || !pack || !price) {
    alert('Lengkapi semua data sebelum mengirim pesanan.');
    return;
  }

  const message = encodeURIComponent(
    `Halo, saya ingin membeli ${pack} dengan total ${price}.\nNickname: ${nickname}\nNomor WA: ${whatsapp}`
  );
  const waNumber = '6281234567890';
  window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
});
