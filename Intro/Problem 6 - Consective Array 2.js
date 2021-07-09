function makeArrayConsecutive2(statues) {
    var max = Math.max(...statues)
    var min = Math.min(...statues)
    
    return max-min - statues.length + 1
}
