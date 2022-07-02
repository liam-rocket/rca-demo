class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head; // node1
    this.last = this.head; // node1
  }

  insert(value) {
    const newNode = new ListNode(value);
    this.last.next = newNode;
    this.last = newNode;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }
}

const node1 = new ListNode(100);
const node2 = new ListNode(101);

const list = new LinkedList(node1);

// list.insert(node2);

console.log(list);

const sample = {
  head: {
    data: 100, // node1
    next: {
      data: 101, // node2
      next: {
        data: 102, // node3
        next: null,
      },
    },
  },
};

const test = {
  head: {
    data: 100,
    next: null,
  },
};
