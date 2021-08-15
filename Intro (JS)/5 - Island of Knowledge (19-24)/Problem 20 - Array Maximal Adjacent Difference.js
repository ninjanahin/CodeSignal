function arrayMaximalAdjacentDifference(inputArray) {
    var maximal_diff = 0
    
    for(let i=0; i<inputArray.length -1 ; i++)
    {
        if (Math.abs(inputArray[i] - inputArray[i+1]) > maximal_diff)
        {
            maximal_diff = Math.abs(inputArray[i] - inputArray[i+1])
        }
    }
    
    return maximal_diff
    }
    