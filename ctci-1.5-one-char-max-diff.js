function oneaway(str1,str2){
    let json1={}
    let json2={}
    for(let i=0;i<str1.length;i++){
        if(str1[i]!=" "){
            json1[str1[i]]? json1[str1[i]]++: json1[str1[i]]=1
        }
    }
    for(let i=0;i<str2.length;i++){
        if(str2[i]!=" "){
            json2[str2[i]]? json2[str2[i]]++: json2[str2[i]]=1
        }
    }
    let invalidCount=0;
    for(let key in json1){
        if(json1[key]!=json2[key]){
            invalidCount++;
        }
        if(invalidCount>1){
            return false;
        }
    }
    console.log(json1,json2)
    return true;
  }
  
  
  console.log(oneaway("palee", "bakep"))