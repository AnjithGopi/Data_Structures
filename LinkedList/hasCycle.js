class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    print(){
        if(this.head==null){
            console.log("empty List")
        }else{
            let temp=this.head
            let values=""
            while(temp){
                values+=`${temp.value} `
                temp=temp.next
            }

            console.log(values)
        }
    }

    hasCycle() {
        if (!this.head) {
            return false;
        }

        let slow = this.head;
        let fast = this.head.next;

        while (fast !== null && fast.next !== null) {
            if (slow === fast) {
                return true; // Cycle detected
            }
            slow = slow.next;
            fast = fast.next.next;
        }

        return false; // No cycle detected
    }
}

// Testing the LinkedList with cycle
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.print()

// Creating a cycle in the linked list (connecting last node to the second node)
list.head.next.next.next.next.next = list.head.next;

console.log(list.hasCycle()); // Output: true
