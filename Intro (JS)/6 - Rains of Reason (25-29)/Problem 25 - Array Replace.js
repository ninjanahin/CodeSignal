function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map((a) => a == elemToReplace ? substitutionElem : a)
    }
    