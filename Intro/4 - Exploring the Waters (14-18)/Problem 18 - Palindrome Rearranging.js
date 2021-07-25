function palindromeRearranging(inputString) {

    //Use a dictionary! yay
    var letter_dict = {}
    var num_even = 0
    var num_odd = 0
    
    //Place each letter into a dictionary
    for (i in inputString)
    {
            if(letter_dict[inputString[i]])
            {
                letter_dict[inputString[i]]++
            }
            else
            {
                letter_dict[inputString[i]] = 1
            }
    }
    
    //Count up the number of each letter in the dictionary
    for (i in letter_dict)
    {
        if(letter_dict[i] %2 == 0)
        {
            num_even++
        }
        else
        {
            num_odd++
        }
    }
    
    return num_odd < 2 || letter_dict.length == 1
    
    }
    