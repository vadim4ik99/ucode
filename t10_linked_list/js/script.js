//!BIG-BIG Question:
//
// let node = this.head
   
// node = node.next
// node = null //this.head != 0 -> true

//
// let node = this.head

// node.next = null //this.head == 0 -> true

class LinkedList {
    constructor(head = {}) {
        this.head = head
        this.size = 0
    }
    [Symbol.iterator] = function*() {
        let node = this.head.next
        while (node) {
            yield node.data
            node = node.next
        }
    }
    add(value) {
        let node = this.head
        while (node) {
            if (!node.next) {
                node.next = new ListNode(value)
                this.size++
                return this
            }
            node = node.next
        }
    }
    remove(value) {
        let node = this.head
        while (node) {
            if (node.next?.data == value) {
                node.next = node.next.next
                this.size--
                return this
            }
            node = node.next
        }
        return false
    }
    contains(value) {
        let node = this.head
        while (node) {
            if (node.data == value) {
                
                return true
            }
            node = node.next
        }
        return false
    }
    clear() {
        this.head = {}
        return this
    }
    count() {
        return this.size
    }
    log() {
        const arr = []
        for (const x of this) {
            arr.push(x)
        }
        console.log(arr.join(', '));
    }
}

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

const createLinkedList = (arr) => {
    let list = new LinkedList()
    arr.forEach((item) => {
        list.add(item)
    })
    console.log(list)
    return list
}

const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);

ll.log();
console.log(ll.count())
// "100, 1, 2, 3, 100, 4, 5, 100"

while(ll.remove(100))
ll.log()
// "1, 2, 3, 4, 5"
console.log(ll.count())

ll.add(10);
ll.log();
// "1, 2, 3, 4, 5, 10"

console.log(ll.contains(10));
// "true"

let sum = 0;
for(const n of ll) {
    sum += n
}
console.log(sum);
// "25"

ll.clear();
ll.log();
// ""
