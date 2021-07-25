function matrixElementsSum(matrix) {
    var total = 0
    var ghost = false
    
    for (let i=0; i<matrix[0].length; i++)
    {
        for(let j=0; j<matrix.length; j++)
        {
            //Go through each column and calculate the total.
            //If you see a ghost('0'), then stop calculating down that column
            if(matrix[j][i] != 0 && ghost == false)
            {
                total+= matrix[j][i]
            }
            else
            {
                ghost = true
            }
        }
        ghost = false //Reset ghost after each column
    }
    
    return total
    }
    