//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromeVerifier(word) {
    if (word === word.split('').reverse().join('')) {
        return true
    }
    else {
        return false
    }
}

console.log(palindromeVerifier('Desenvolvimento'))