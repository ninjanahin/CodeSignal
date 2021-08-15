function avoidObstacles(inputArray) {

    for(let i= 1; i <= 1001; i++)
    {
        //Run check
        //If Array.some() returns true, a collision has happened.
        if(!inputArray.some(a => a % i == 0))
        {
            return i
        }
    }
    
    }
    