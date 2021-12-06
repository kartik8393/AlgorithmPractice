function isPermutation(str1, str2) {
  let sJson1 = {}
  let sJson2 = {}
  for (let i = 0; i < str1.length; i++) {
    sJson1[str1[i]] = sJson1[str1[i]] || 0 + 1
  }
  for (let i = 0; i < str2.length; i++) {
    let sJson2 = createJson(str2.slice(i, i + str1.length))
    if (compareJson(sJson1, sJson2)) {
      return true;
    }
  }
  return false;
}

function createJson(str1) {
  let sJson1 = {}
  for (let i = 0; i < str1.length; i++) {
    sJson1[str1[i]] = sJson1[str1[i]] ? sJson1[str1[i]] + 1 : 1
  }
  return sJson1
}

function compareJson(o1, o2) {
  for (let key in o1) {
    if (o1[key] != o2[key]) {
      return false
    }
  }
  return true
}

console.log(isPermutation("abc", "zaxuacazbiaj"))