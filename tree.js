/** TreeNode: node for a general tree. */

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

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    
    let toVisitStack = [this.root];
    let sum = 0;

    if (toVisitStack[0] === null || toVisitStack[0].children.length === 0 ) return 0;

    while (toVisitStack.length) {

      let current = toVisitStack.pop();

      sum += current.val;

      for (let child of current.children) {
        toVisitStack.push(child);
      }

    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let toVisitStack = [this.root];
    let nodesWithEvens = 0;

    if (toVisitStack[0] === null || toVisitStack[0].children.length === 0 ) return 0;

    while (toVisitStack.length) {

      let current = toVisitStack.pop();

      if (current.val % 2 === 0){
        nodesWithEvens++;
      }

      for (let child of current.children) {
        toVisitStack.push(child);
      }

    }
    return nodesWithEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };
