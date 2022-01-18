function mergeTopDown(arr,str){
  if(arr.length<=1){
    return arr
  }
  
  let middle=Math.floor(arr.length/2)
  
  let left=arr.slice(0,middle);
  let right=arr.slice(middle)
  console.log("mergeTopDown=>",str,left,right)
  return merge(mergeTopDown(left,"left"),mergeTopDown(right,"right"))
  
}

function merge(left,right){
  let array=[]
  console.log("merge=>",left,right)
  while(left.length && right.length){
    if(left[0]< right[0]){
      array.push(left.shift())
    }
    else{
      array.push(right.shift())
    }
  }
  console.log("mergereturn=>",array.concat(left.slice()).concat(right.slice()))
  return array.concat(left.slice()).concat(right.slice())
}


console.log("answer",mergeTopDown([1,8,2,7,3,6,4]))