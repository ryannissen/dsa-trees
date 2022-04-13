/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    let toVisitQueue = [node];
    let depth = 0;

    if (toVisitQueue[0] === null || (toVisitQueue.left === null && toVisitQueue.right === null)) return 0;

    while (toVisitQueue.length) {
      depth++;

      let current = toVisitQueue.shift();

      if (current.left === null && current.right === null) return depth;

      for (let child of [current.left, current.right]) {
        if (child !== null){
          toVisitQueue.push(child);
        }
      }

    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    let toVisitStack = [node];
    let depth = 0;
    let treeLengths = [];

    if (toVisitStack[0] === null || (toVisitStack.left === null && toVisitStack.right === null)) return 0;

    while (toVisitStack.length) {
      depth++;

      let current = toVisitStack.pop();       

      if (current.left === null && current.right === null){
        treeLengths.push(depth);
      }

      for (let child of [current.left, current.right]) {
        if (child !== null){
          toVisitStack.push(child);
        }
      }
    }
    console.log(treeLengths);
    return Math.max(...treeLengths);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
