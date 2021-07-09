function almostIncreasingSequence(sequence) {
    var fail_array = []
    var output = true
    
    for(let i=0; i< sequence.length-1; i++)
    {
        if(sequence[i] >= sequence[i+1])
        {
            fail_array.push(i) //Add the index of the failed variable
        }
    }
    
    //If the number of variables in the failed array is greater than 1
    //Return with a fail
    if(fail_array.length > 1)
    {
        output = false
    }
    
    //If the number of variables in the failed array IS one
    //Check the number before and after that index to see if the test would still pass
    else if(fail_array.length == 1)
    {
        if((fail_array[0] != 0 && fail_array[0] != sequence.length-2) && sequence.length !=2) 
        {
            //If they are not the first or last variables then run the checks
            if((sequence[fail_array[0]-1] >= sequence[fail_array[0]+1]) && (sequence[fail_array[0]] >= sequence[fail_array[0]+2]))
            {
                output = false
            }
        }
        else
        {
            output = true
        }
        
    }
    else
    {
        output = true
    }
    
    return output
}
