const { Tree, TreeNode } = require("./treeExercise");

let smallTree;
let largeTree;
let emptyTree;

beforeEach(function () {
  emptyTree = new Tree();

  //build a small tree
  let nsmall = new TreeNode(1);
  let nsmall2 = new TreeNode(2);
  nsmall.children.push(nsmall2);
  smallTree = new Tree(nsmall);

  //build large tree
  let n = new TreeNode(1);
  let n2 = new TreeNode(2);
  let n3 = new TreeNode(3);
  let n4 = new TreeNode(4);
  let n5 = new TreeNode(5);
  let n6 = new TreeNode(6);
  let n7 = new TreeNode(7);
  let n8 = new TreeNode(8);

  n.children = [n2, n3, n4];
  n4.children.push(n5, n6);
  n6.children.push(n7);
  n7.children.push(n8);

  largeTree = new Tree(n);
});

describe("sumValues", function () {
  it("sums simple tree", function () {
    expect(smallTree.sumVals()).toEqual(3);
  });

  it("sums more complicated trees", function () {
    expect(largeTree.sumVals()).toEqual(36);
  });
});

describe("countEvens", function () {
  it("counts evens for simply tree", function () {
    expect(smallTree.countEvens()).toEqual(1);
  });
});

describe("numGreater", function () {
  it("counts nodes in small trees", function () {
    expect(smallTree.numGreater(0)).toEqual(2);
    expect(smallTree.numGreater(1)).toEqual(1);
  });
});
