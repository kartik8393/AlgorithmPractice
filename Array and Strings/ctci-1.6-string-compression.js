function stringCompression(str) {
    str = str + "|";
    let count = 0;
    str = str.split("")
    while (str[0] != '|') {
        if (str[0] == str[1]) {
            count++;
            str.shift()
        }
        else {
            count = count + 1
            str.push(str[0] + count)
            str.shift()
            count = 0;
        }
        i++;
    }
    str.shift()
    str = str.join("")
    return str
}


console.log(stringCompression("aaaaaaaaabbbcdeeeeff"));