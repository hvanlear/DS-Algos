// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const firstPage = new Node("google.com");
// const secondPage = new Node("reddit.com");

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

//more consise way of creating nodes
// const firstPage = new Node(
//   "google.com",
//   new Node("reddit.com", new Node("amazon.com"))
// );

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
  find(val) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.val === val) return true;
      currentNode = currentNode.next;
    }
    //if no node with given val is found
    return false;
  }
  append(val) {
    const newNode = new Node(val);
    //if this is the first node then it is both the head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    //subsequent nodes are the new tail
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

// const history = new LinkedList();
// history.head = firstPage;

const train = new LinkedList();
train.append("Engine");
train.append("Freight Car 1");
train.append("Freight Car 2");
