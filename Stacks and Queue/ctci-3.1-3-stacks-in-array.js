class Node{
    constructor(data=null){
        this.data=data;
    }
}

class StacksInArr{
    constructor(length=9){
        this.length=9;
        this.s1=0,this.e1=0;
        this.s2=3,this.e2=3;
        this.s3=6,this.e3=6;
        this.list=new Array(9)
    }

    push1(data){
        if(this.e1<=3){
            this.list[this.e1]=data;
            
            this.e1++;
            console.log(this.e1)
        }
    }
    push2(data){
        if(this.e2<=6){
            this.list[this.e2]=data;
            this.e2++;
        }
    }
    push3(data){
        if(this.e3<=9){
            this.list[this.e3]=data;
            this.e3++;
        }
    }
    pop1(data){
        if(this.e1>this.s1){
            let el=this.list[this.e1-1]
            this.list[this.e1-1]=undefined;
            this.e1--;
            return el
        }
    }
    pop2(data){
        if(this.e2>this.s2){
            let e2=this.list[this.e2-1]
            this.list[this.e2-1]=undefined;
            this.e2--;
            return e2
        }
    }
}

let sia=new StacksInArr()
sia.push1(11);
sia.push1(12);
sia.push1(13);
sia.push2(21);
sia.push3(31);
sia.push3(32);
sia.push3(33);
console.log(JSON.stringify(sia))
console.log(sia.pop1())
console.log(sia.pop1())
console.log(sia.pop2())
console.log(sia.pop2())
console.log(JSON.stringify(sia))

