const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';

    const coins = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => error.toString());

    return coins;
}

const showCoins = async () => {
    const coins = await fetchCoins();

    const coinsList = document.getElementById('coins-list');

    coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
        const newCoin = document.createElement('li');
        const priceUSD = Number(coin.priceUsd);

        newCoin.innerText = `${coin.name} (${coin.symbol}): ${priceUSD.toFixed(2)}`;

        coinsList.appendChild(newCoin);
    });
}

window.onload = () => showCoins();
