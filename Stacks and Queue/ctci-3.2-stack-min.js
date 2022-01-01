class Node{
    constructor(data){
        this.data=data;
    }
}

class Stack{
    constructor(){
       this.list=[]
       this.minimum=999999999999;
    }

    push(data){
        this.list[this.list.length]=data;
        if(data<this.minimum){
            this.minimum=data;
        }
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
    min(){
        return this.minimum;
    }
}

let s=new Stack()
s.push(5)
s.push(10)
s.push(15)
s.push(3)
console.log(s)
// console.log(s.pop())
// console.log(s)
console.log(s.min())


