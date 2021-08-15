function sortByHeight(a) {
    
    var array2 = a.filter(x = x != -1).sort((a,b) = b - a)
    
    return a.map(x = x != -1 ? array2.pop() : x)


}