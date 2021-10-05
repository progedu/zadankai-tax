//@ts-check
const priceElement = document.getElementById('price');
const taxInPriceElement = document.getElementById('tax-in-price');
priceElement.addEventListener('input', () => {
    const priceValue = priceElement['value'];
    const price = parseInt(priceValue) || 0;
    const taxInPrice = getTaxInPrice(price);
    taxInPriceElement.innerText = taxInPrice.toString();
});

/**
 * 税込価格を計算
 * @param {number} price 
 * @return {bigint} 
 */
function getTaxInPrice(price) {
    return BigInt(Math.floor(price * 1.1));
}