function isIPv4Address(inputString) {
    var num =  "([0-9]|[1-9][0-9]|1[0-9][0-9]|25[0-5]|2[0-4][0-9])"
    num +=  ("\\." + num).repeat(3)
    return (new RegExp("^" + num + "$")).test(inputString)
    }
    