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

    // REMOVE DUPLICATE
    removeDup(){
        let prev=this.head;
        let current=this.head.next;
        let arr=[]
        arr.push(this.head.data)
        while(current){
            if(arr.includes(current.data)){
                prev.next=current.next;
                
            }
            else{
                arr.push(current.data)
                prev=current;
            }
            
            current=current.next;
        }
    }

    
}

function kthElement(head,k){
    if(head==null){
        return 0;
    }
    let index=kthElement(head.next,k)+1;
    if(index==k){
        console.log(head,"found");
    }
    console.log(index)
    return index;
}

l1=new LinkedList()
l1.insertFirst(100)
l1.insertLast(100)
l1.insertLast(200)
l1.insertLast(200)
l1.insertLast(200)
l1.insertLast(300)
l1.insertLast(300)

kthElement(l1.head,3)