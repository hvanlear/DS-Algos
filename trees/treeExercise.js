class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  //Given a n-ary tree of integers, return the sum of all the integers.

  sumVals() {
    if (!this.root) return 0;
    let total = this.root.val;

    function sumHelper(node) {
      // go through all the children for a Node
      for (let child of node.children) {
        //accumulate all values
        total += child.val;
        //if it has any children
        if (child.children.length > 0) {
          //recurse with the child as the root
          sumHelper(child);
        }
      }
    }
    sumHelper(this.root);
    return total;
  }

  //   countEvens
  //   Given a n-ary tree of integers, return the count of all the even integers.
  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countEvensHelper(node) {
      //go through all the children for a node
      for (let child of node.children) {
        //count the child if the value is even
        if (child.val % 2 === 0) count++;
        //if it has any children
        if (child.children.length > 0) {
          // recurst with the child as the root
          countEvensHelper(child);
        }
      }
    }
    countEvensHelper(this.root);
    return count;
  }

  //numGreater
  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function numGreaterHelper(node) {
      //go through all the children for the node
      for (let child of node.children) {
        //count the child if the value is greater than lowerbound
        if (child.val > lowerBound) count++;
        //if it has any children
        if (child.children.length > 0) {
          //recurse with the child as the root
          numGreaterHelper(child);
        }
      }
    }
    numGreaterHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
