const packageButtons = document.querySelectorAll('.package-card');
const packageInput = document.getElementById('package');
const priceInput = document.getElementById('price');
const orderSummary = document.getElementById('orderSummary');
const orderForm = document.getElementById('orderForm');

const formatCurrency = (value) => `Rp ${value.toLocaleString('id-ID')}`;

const updateSelectedPackage = (button) => {
  packageButtons.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');

  const diamonds = button.dataset.diamonds;
  const price = Number(button.dataset.price);

  packageInput.value = `${diamonds} Diamond`;
  priceInput.value = formatCurrency(price);
  orderSummary.innerHTML = `
    <h3>Ringkasan Pesanan</h3>
    <p>Paket: <strong>${diamonds} Diamond</strong></p>
    <p>Harga: <strong>${formatCurrency(price)}</strong></p>
    <p>Isi UID dan nickname, lalu kirim pesanan untuk proses cepat.</p>
  `;
};

packageButtons.forEach((button) => {
  button.addEventListener('click', () => updateSelectedPackage(button));
});

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const uid = document.getElementById('uid').value.trim();
  const nickname = document.getElementById('nickname').value.trim();
  const selectedPackage = packageInput.value;
  const price = priceInput.value;

  if (!uid || !nickname) {
    alert('Silakan isi UID dan nickname Anda dengan benar.');
    return;
  }

  orderSummary.innerHTML = `
    <h3>Pesanan Diterima</h3>
    <p>Terima kasih, <strong>${nickname}</strong>.</p>
    <p>UID: <strong>${uid}</strong></p>
    <p>Paket: <strong>${selectedPackage}</strong></p>
    <p>Total Bayar: <strong>${price}</strong></p>
    <p>Tim kami akan menghubungi Anda segera untuk konfirmasi pembayaran dan pengiriman diamond.</p>
  `;

  orderForm.reset();
  updateSelectedPackage(document.querySelector('.package-card.active'));
});

updateSelectedPackage(document.querySelector('.package-card.active'));