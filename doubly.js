class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    this.length++;
    let newNode = new ListNode(value);

    if (this.tail) {
      // list is not empty
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  log() {
    let current = this.head;
    while (current) {
      console.log(
        `${current.previous?.data} ${current.data} ${current.next?.data}`
      );
      current = current.next;
    }
  }
}

const dList = new DoublyLinkedList();

dList.insert(7);
dList.insert(8);
dList.insert(9);
dList.log();
