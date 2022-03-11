let numbers = [2, 3, 6, 7, 10, 1];

function numberVerifier (numbers) {

    let biggestNumber = 0

    for (i = 0; i < numbers.length; i += 1){
        if (numbers[biggestNumber] < numbers[i]) {
            biggestNumber = i
        }
    }
    return biggestNumber
}

console.log(numberVerifier(numbers))