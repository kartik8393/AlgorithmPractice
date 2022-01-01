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
                return current;
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

function checkIntersection(head1,head2){
    let current1=head1,current2=head2;
    let l1=0,l2=0;
    // GETTING LENGTH OF LISTS
    while(current1){
        l1++;
        current1=current1.next;
    }
    while(current2){
        l2++;
        current2=current2.next;
    }
    let dif=Math.abs(l1-l2)

    // MOVE DIFFERENCE IN LONGER LIST.
    current1=head1,current2=head2;
    if(l1>l2){
        for(let i=0;i<dif;i++){
            current1=current1.next;
        }
    }
    else{
        for(let i=0;i<dif;i++){
            current2=current2.next;
        }
    }

    // COMPARE NEXT TO FIND INTERSECTION
    while(current1.next && current2.next){
        if(current1.next==current2.next){
            console.log(current1.next);
            return current1.next;
        }
        current1=current1.next;
        current2=current2.next;
    }
    console.log(false)
    return false;

}

l1=new LinkedList()
l2=new LinkedList()
l3=new LinkedList()


l1.insertLast(100)
l1.insertLast(200)
l1.insertLast(300)

l2.insertLast(100)
l2.insertLast(200)
l2.insertLast(300)

l3.insertLast(4400)
l3.insertLast(500)
l3.insertLast(600)

l1.getAt(2).next=l3.head
l2.getAt(2).next=l3.head

checkIntersection(l1.head,l2.head)







