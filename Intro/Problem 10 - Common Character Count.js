function commonCharacterCount(s1, s2) {

    var dictA = {}
    var dictB = {}
    var output = 0
    
    for (let character of s1)
    {
       if(dictA[character])
       {
           dictA[character] +=1
       }
       else
       {
           dictA[character] = 1
       }
    }
    
    for (let character of s2)
    {
       if(dictB[character])
       {
           dictB[character] +=1
       }
       else
       {
           dictB[character] = 1
       }    
    }
    
    for (var key in dictA)
    {
        if(dictA[key] && dictB[key])
        {
            //Add the smallest number (That represents the common values)
            let smallest = Math.min(dictA[key], dictB[key])
            output += smallest
        }
        
    }
    
    return output
    }
    