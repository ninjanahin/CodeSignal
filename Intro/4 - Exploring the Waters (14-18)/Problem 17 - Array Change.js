function arrayChange(inputArray) {

    var counter = 0
    for(let i=0 ; i< inputArray.length-1; i++)
    {
        if(inputArray[i] >= inputArray[i+1])
        {
            let diff = (inputArray[i] - inputArray[i+1]) + 1
            inputArray[i+1] += diff
            counter += diff
        }
    }
    
    return counter
    }