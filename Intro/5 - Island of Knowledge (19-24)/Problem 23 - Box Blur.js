function boxBlur(image) {
    //Let's average the first 9 numbers on the X and Y axis
    var output = []
    var x = image[0].length
    var y = image.length
    var average = 0
    
    for(let i=1; i< y-1; i++)
    {
        output.push([])
        for(let j=1; j< x-1; j++)
        {
            for(let k=-1; k< 2 ; k++)
            {
                for(let m=-1; m< 2; m++)
                {
                    average+=(image[i+m][j+k])
                }
            }
            output[i-1][j-1] =Math.floor(average/9)
            average = 0
        }
    }
    
    return output
    
    }
    