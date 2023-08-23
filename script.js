
const conversionRates = { 
    usd:{ btc:0.000038, eth:0.00060 , usdt:1.00, usdc:1.00 },
    eur:{ btc:0.000042, eth:0.00065 , usdt:1.08, usdc:1.09 },
    gbp:{ btc:0.000049, eth:0.00076 , usdt:1.27, usdc:1.27 },
    inr:{ btc:0.000000413, eth:0.0000072 , usdt:0.0120, usdc:0.012 },
};
function currencyConvert() {
    const amount = parseFloat(document.getElementById("amount").value);
    const currency = document
      .getElementById("currency")
      .value.toLowerCase();
    const cryptocurrency = document
      .getElementById("cryptocurrency")
      .value.toLowerCase();
    const conversionRate = conversionRates[currency][cryptocurrency];
    const convertedAmount = amount * conversionRate;
const resultElement = document.getElementById("result");
    resultElement.textContent = `Output: ${amount} ${currency.toUpperCase()} = ${convertedAmount} ${cryptocurrency.toUpperCase()}`;
  }