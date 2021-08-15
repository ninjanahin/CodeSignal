function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

    return Math.max(yourRight, yourLeft) == Math.max(friendsRight, friendsLeft) && 
           Math.min(yourRight, yourLeft) == Math.min(friendsRight, friendsLeft)
}