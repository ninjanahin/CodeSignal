function areSimilar(a, b) {
    var diff_a = []
    var diff_b = []
    
    if(a.length != b.length)
    {
        return false
    }

    //Assuming it passes that condition, move on
    for(let i=0; i< b.length; i++)
    {
        if(a[i] != b[i])
        {
            diff_a.push(a[i])
            diff_b.push(b[i])
        }
    } 
    
    return (diff_a.length == 2 && (diff_a[0] == diff_b[1] && diff_a[1] == diff_b[0])) || (diff_a.length == 0)
    
}