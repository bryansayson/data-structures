var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = []; // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var targetFound = false;

  function searchTree(tree) {
    if (tree.value === target) {
      return targetFound = true;
    }
    if (tree.children.length > 0) {
      for (var i = 0; i < tree.children.length; i++) {
        searchTree(tree.children[i]);
      }
    }
    return targetFound;
  }
  return searchTree(this);
};

/*
 * Complexity: What is the time complexity of the above functions?*/
