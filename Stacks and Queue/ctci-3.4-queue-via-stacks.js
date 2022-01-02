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

class QStacks{
    constructor(){
        this.s1=new Stack();
        this.temp=new Stack();
    }

    push(data){
        this.s1.push(data);
    }
    pop(){
        while(this.s1.list.length!==0){
            this.temp.push(this.s1.pop())
        }
        let p=this.temp.pop()
        while(this.temp.list.length!==0){
            this.s1.push(this.temp.pop())
        }
        return p;
    }
}

let qs= new QStacks()

qs.push(1)
qs.push(2)
qs.push(3)

console.log(qs.pop())
console.log(qs.pop())
console.log(qs.pop())
console.log(JSON.stringify(qs))