function biggestName (names) {

    theName = names[0]

    for (i in names) {
        if (theName.length < names[i].length) {
            theName = names[i]
        }
    }

    return theName
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))