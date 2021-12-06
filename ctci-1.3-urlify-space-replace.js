function urlify(str) {
    let arr = []
    str = trimStr(str)
    console.log(str)
    arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == " ") {
            arr[i] = "%20";
        }
    }
    //   console.log(arr)
    return arr.join("")
}


function trimStr(str) {
    let i = 0;
    while (str[i] == " ") {
        // console.log(str[i],i)
        i++;
    }
    let j = str.length - 1;
    let jc = 0
    while (str[j] == " ") {
        // console.log(str[j],j)
        j--;
        jc++;
    }
    str = str.slice(i, str.length)
    str = str.slice(0, str.length - jc)
    return str;
}

console.log(urlify("   Mr John  Smith    "))