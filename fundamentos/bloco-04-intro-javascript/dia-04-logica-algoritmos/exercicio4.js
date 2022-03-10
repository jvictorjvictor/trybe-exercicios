maiorNumeroPrimo = 0;

for (let numero = 0; numero <= 50; numero += 1) {
    let primo = true;
    for (let divisor = 2; divisor < numero; divisor += 1) {
        if (numero % divisor === 0) {
            primo = false;
        }
    }
    if (primo) {
        maiorNumeroPrimo = numero;
    }
}

console.log(maiorNumeroPrimo);