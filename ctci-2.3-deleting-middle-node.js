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

    deleteMiddleNode(){
        let prev=this.head;
        let single=this.head;
        let double=this.head;
        while(double){
            
            double=double.next;
            if(double && double.next){
                prev=single
                double=double.next;
                single=single.next;
            }
            else{
                console.log("middle-prev",prev)
                console.log("middle",single)
                prev.next=single.next;
                break;
            }
        }
    }
}



l1=new LinkedList()
l1.insertFirst(1001)
l1.insertLast(1002)
l1.insertLast(2003)
l1.insertLast(2004)
l1.insertLast(2005)
l1.insertLast(3006)
l1.insertLast(3007)
l1.insertLast(3007)
l1.insertLast(3007)
l1.printLinkedList()
l1.deleteMiddleNode()
console.log("after")
l1.printLinkedList()