export class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value) {
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
        this.length++;
    }

    toString() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.value + (current.next ? " -> " : "");
            current = current.next;
        }
        return output;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
