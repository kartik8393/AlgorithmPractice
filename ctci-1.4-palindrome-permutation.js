function permutationOfPalindrome(str){
    let json={}
    for(let i=0;i<str.length;i++){
        if(str[i]!=" "){
            json[str[i]]? json[str[i]]++: json[str[i]]=1
        }
    }
    let odd=0
    for(let key in json){
        if(json[key]%2==1){
            odd++;
        }
    }
    if(odd==1 || odd==0){
        return true
    }
    else{
        return false;
    }
  }
  
  
  console.log(permutationOfPalindrome("tactb  bcoa"))