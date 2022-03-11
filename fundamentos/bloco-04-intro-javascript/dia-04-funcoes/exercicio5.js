let numbers = [2, 4, 6, 7, 10, 0, -3]

function comparingNumbers (numbers) {

    let smallestNumber = 0

    for (i in numbers) {
        if (smallestNumber > numbers[i]) {
            smallestNumber = i
        }
    }

    return smallestNumber
}

console.log(comparingNumbers(numbers))