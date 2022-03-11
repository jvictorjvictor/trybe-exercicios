function somatory (number) {

    let factorialNumber = 0

    for (let i = 1; i <= number; i += 1) {
        factorialNumber += i
    }

    return factorialNumber
}

console.log(somatory(5))