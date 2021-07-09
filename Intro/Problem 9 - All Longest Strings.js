function allLongestStrings(inputArray) {
    var longest_len = 0
    //Check for longest string
    for(let i=0; i< inputArray.length; i++)
    {
        if (inputArray[i].length > longest_len)
        {
            longest_len = inputArray[i].length
        }
    }
    
    //Filter Array for those items of that longest length
    return inputArray.filter((item) => item.length == longest_len )
    }
    