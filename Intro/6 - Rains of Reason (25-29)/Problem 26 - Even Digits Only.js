function evenDigitsOnly(n) {

    for(; n > 0 ; n = n/10|0)
    {
        if(n%2 != 0)
        {
            return false
        }
    }
    
    return true
    }
    