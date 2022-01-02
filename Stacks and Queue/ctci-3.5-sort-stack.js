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

class SortStack{
    constructor(){
        this.s1=new Stack();
        this.temp=new Stack();
    }

    push(data){
        if(this.s1.list.length==0){
            this.s1.push(data);
        }
        else{
            while(this.s1.list[this.s1.list.length-1]>data){
                this.temp.push(this.s1.pop())
            }
            console.log(this.s1,data)
            this.s1.push(data)
            while(this.temp.list.length!=0){
                this.s1.push(this.temp.pop())
            }
        }
    }
}

let ss= new SortStack()
ss.push(2)
ss.push(5)
ss.push(3)
ss.push(9)
ss.push(11)
ss.push(1)
console.log(JSON.stringify(ss))