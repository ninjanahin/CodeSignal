function isLucky(n) {

    var digits = n.toString() //The number of digits
    var sum_h1 = 0 //Sum of Digits - First half
    var sum_h2 = 0 //Sum of Digits - Second half
    for (let i=0; i< digits.length; i++)
    {
        if(i < digits.length / 2)
        {
            sum_h1 += Number(digits[i])
        }
        else
        {
            sum_h2 += Number(digits[i])
        }
    }
    
    return sum_h1 == sum_h2 
    }
    