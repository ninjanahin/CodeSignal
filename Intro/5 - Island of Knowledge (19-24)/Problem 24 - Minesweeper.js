function minesweeper(matrix) {
    var output = JSON.parse(JSON.stringify(matrix)) //DEEP copy the array

    for(let y= 0; y< output.length; y++)
    {
        for(let x= 0; x< output[0].length; x++)
        {
            var counter = 0
            for(let i=-1 ; i< 2 ; i++)
            {
                for(let j = -1 ; j< 2; j++)
                {
                    if(matrix[y+i] 
                    && matrix[y+i][x+j]
                    && (i || j))
                    {
                        counter++
                    }
                }
            }
            output[y][x] = counter
            
        }
    }

    return output
}
