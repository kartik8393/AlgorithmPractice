function quickSort(arr){
    if(arr.length==1){
      return arr;
    }
    
    let pivot=arr[arr.length-1]
    let leftArr=[],rightArr=[]
    for(let i=0;i<arr.length-1;i++){
      if(arr[i]>pivot){
        rightArr.push(arr[i])
      }
      else{
        leftArr.push(arr[i])
      }
    }
    console.log(leftArr,pivot,rightArr)
    if(leftArr.length >0 && rightArr.length >0){
      return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
    }else if(leftArr.length>0){
      return [...quickSort(leftArr),pivot]
    }
    else{
      return [pivot,...quickSort(rightArr)]
    }
  }
  
  
  
  
  console.log(quickSort([1,9,2,4,3]));