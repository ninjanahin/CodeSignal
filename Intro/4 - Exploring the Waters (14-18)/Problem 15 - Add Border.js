function addBorder(picture) {
    var b_array = [] //The bordered array
    var y = picture.length
    var x = picture[0].length
    var padding = ""
    
    //Create a string of the required length of "*"'s
    for(let i = 0 ; i <= x+1; i++)
    {
        padding += "*"    
    }
    
    //Add the padding to the top and bottom
    b_array[0] = padding
    b_array[y+1] = padding
    
    //Create a slice of the picture array with added *'s
    for(i = 0 ; i< y; i++)
    {
        b_array[i+1] = "*" + [...picture[i]].join('') + "*"
    }
    
    
    return b_array
    }
    