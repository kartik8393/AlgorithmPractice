class Node{
    constructor(data){
        this.data=data;
    }
}

class Stack{
    constructor(){
       this.list=[]
    }

    push(data){
        this.list[this.list.length]=data;
    }
    pop(){
        if(this.list.length<=0){
            return "Underflow"
        }
        else{
            let popEl=this.list[this.list.length-1]
            this.list.splice(this.list.length-1,1)
            return popEl
        }
    }
}

class SetOfStack{
    constructor(){
        this.stackList=[]
    }
    push(data){
        if(this.stackList.length>0){
            if(this.stackList[this.stackList.length - 1].list.length<3){
                this.stackList[this.stackList.length - 1].list.push(data)
            }
            else{
                let s= new Stack();
                s.push(data);
                this.stackList.push(s)
            }
        }
        else{
            let s= new Stack();
            s.push(data);
            this.stackList.push(s)
        }
    }
    pop(){
        if(this.stackList.length>0){
            if(this.stackList[this.stackList.length-1].list.length>=2){
               let arr= this.stackList[this.stackList.length-1]
               arr.list.splice(arr.list.length-1,1)
            }
            else{
                console.log(this.stackList[this.stackList.length-1].list.length)
                this.stackList.splice(this.stackList.length-1,1)
            }
        }
        else{
            return -1;
        }
    }
}

let ss=new SetOfStack()
ss.push(1)
ss.push(2)
ss.push(3)
ss.push(4)
ss.push(5)
console.log(JSON.stringify(ss))
ss.pop()
console.log(JSON.stringify(ss))
ss.pop()
console.log(JSON.stringify(ss))