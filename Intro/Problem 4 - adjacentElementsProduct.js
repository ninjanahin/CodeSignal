function adjacentElementsProduct(inputArray) {
    var maxProduct = -Infinity
    
    for(let i=0; i<inputArray.length-1 ; i++)
    {
        curr = inputArray[i] * inputArray[i+1]
        
        if(curr > maxProduct)
        {
            maxProduct =  curr
        }
    }
    
    return maxProduct 
    }
    