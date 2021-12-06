function isUnique(str) {
    let a = {}
    for (let i = 0; i < str.length; i++) {
        if (a[str[i]]) {
            return false;
        }
        else {
            a[str[i]] = str[i]
        }
    }
    return true;
}

console.log(isUnique("abcdef"))