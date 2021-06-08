class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
  findDFS(val) {
    const toVisitStack = [this]; //htmlEl, whatever we called find on eg htmlEl.find('li')
    while (toVisitStack.length) {
      const current = toVisitStack.pop();
      if (current.val === val) {
        return current;
      }
      for (let child of current.children) {
        toVisitStack.push(child); //stack:['head', 'body']
      }
    }
  }
  findBFS(val) {
    const toVisitQueue = [this]; //htmlEl, whatever we called find on eg htmlEl.find('li')
    while (toVisitQueue.length) {
      const current = toVisitQueue.shift();
      if (current.val === val) {
        return current;
      }
      for (let child of current.children) {
        toVisitQueue.push(child); //stack:['head', 'body']
      }
    }
  }
}

let htmlEl = new Node("html", [
  new Node("head", [new Node("title")]),
  new Node("body", [new Node("ul", [new Node("li")])]),
]);

let amy = new Node("amy", [
  new Node("bob"),
  new Node("barb"),
  new Node("barry"),
]);

// let bob = new Node("bob");
// let barb = new Node("barb");
// let barr = new node("barry");
