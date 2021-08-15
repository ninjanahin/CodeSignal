function alphabeticShift(inputString) {
    var output = ""
    for (index in inputString)
    {
        //Get the charcode
        let c = inputString.charCodeAt(index)
        
        //replace the index with a new char
        if(c == 122)
        {
            output += 'a'
        }
        else if(c == 90)
        {
            output += 'A'
        }
        else
        {
            output += String.fromCharCode(c+1)
        }
        
    }
    //console.log(output)
    //console.log(Buffer(inputString))
    return output
    }