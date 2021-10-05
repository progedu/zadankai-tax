const priceElement = document.getElementById('price');
const taxInPriceElement = document.getElementById('tax-in-price');
priceElement.addEventListener('input', () => {
    const priceValue = priceElement['value'];
    const taxInPrice = getTaxInPrice(price);
    taxInPriceElement.innerText = taxInPrice;
});

function getTaxInPrice(price) {
    return price * 1.1;
}
