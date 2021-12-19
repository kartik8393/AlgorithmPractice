class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    // INSERT FIRST NODE
    insertFirst(data){
        this.head=new Node(data,this.head)
        this.size++;
    } 

    // INSERT LAST NODE
    insertLast(data){
        if(!this.head){
            this.head=new Node(data)
        }
        else{
            let current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=new Node(data)
        }
        this.size++;
    }

    // INSERT AT AN INDEX
    insertIndex(data,index){
        if(index==0){
            this.insertFirst(data);
            return;
        }
        if(index>this.size){
            return false;
        }

        let current,previous;
        current=this.head
        let count=0;
        while(count<index){
            previous=current;
            current=current.next;
            count++;
        }
        let node=new Node(data)
        previous.next=node;
        node.next=current;
        this.size++;
        
    }

    // GET AT INDEX
    getAt(index){
        let current=this.head;
        let currentIndex=0;
        if(index>this.size) return false;
        while(current){
            if(currentIndex==index){
                console.log(index,current.data)
                return current.data;
            }
            current=current.next;
            currentIndex++;
        }
    }

    // REMOVE AT INDEX
    removeAt(index){
        if(index>this.size){
            return;
        }
        if(index==0){
            this.head=this.head.next;
            this.size--;
            return;
        }

        let current=this.head;
        let previous;
        let count=0;
        while(count<index){
            previous=current;
            current=current.next;
            count++;
        }
        this.size--;
        previous.next=current.next
    }

    // PRINT THE WHOLE LIST
    printLinkedList(){
        let current=this.head;
        while(current){
            console.log("Node",current.data)
            current=current.next;
        }
    }
}

function sumList(l1,l2){
    let head1=l1.head;
    let head2=l2.head;
    let current1=head1;
    let current2=head2;
    let resHead=null
    let resEnd
    let carry=0;
    while(current1 || current2){
        let c1val=current1 ? current1.data : 0
        let c2val=current2 ? current2.data : 0
        let sum=c1val +c2val +carry;
        
        if(sum<=9){
            if(!resHead){
                resHead=new Node(sum)
                resEnd=resHead;
            }
            else{
                let node=new Node(sum)
                resEnd.next=node;
                resEnd=node;
            }
            carry=0;
        }
        else{
            if(!resHead){
                resHead=new Node(sum%10)
                resEnd=resHead;
            }
            else{
                let node=new Node(sum%10)
                resEnd.next=node;
                resEnd=node;
            }
            carry=Math.floor(sum/10)

        }
        current1= current1? current1.next : null
        current2= current2? current2.next : null
    }
    if(carry>0){
        resEnd.next=new Node(carry)
    }
    console.log(JSON.stringify(resHead))
}

l1=new LinkedList()
l2=new LinkedList()

l1.insertLast(1)
l1.insertLast(0)
l1.insertLast(1)

l2.insertLast(5)
l2.insertLast(0)
l2.insertLast(5)
l2.insertLast(1)

sumList(l1,l2)