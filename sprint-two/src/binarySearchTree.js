var BinarySearchTree = function(value) {

  var binaryTree = {};
  _.extend(binaryTree, BinarySearchTreeMethods);
  binaryTree.value = value;
  return binaryTree;

};

var BinarySearchTreeMethods = {

  insert: function(v) {

    var searchBinaryTree = function(branch) {
      if (v < branch.value) {
        if (branch.left === undefined) {
          branch.left = BinarySearchTree(v);
        } else {
          searchBinaryTree(branch.left);
        }

      } else if (v > branch.value)
        if (branch.right === undefined) {
          branch.right = BinarySearchTree(v);
        } else {
          searchBinaryTree(branch.right);
        }
    }
    searchBinaryTree(this);
  },

  contains: function(v) {
    var searchBoolean = false;
    var searchBinaryTree = function(branch) {

      if (branch.value === v) {
        searchBoolean = true;
      }
      if (v < branch.value) {
        if (branch.left === undefined) {
          searchBoolean = false;
        } else {
          searchBinaryTree(branch.left);
        }

      } else if (v > branch.value)
        if (branch.right === undefined) {
          searchBoolean = false;
        } else {
          searchBinaryTree(branch.right);
        }
    }
    searchBinaryTree(this);
    return searchBoolean;

  },

  depthFirstLog: function(func) {

    var cbBinaryTree = function(branch) {
      func(branch.value);
      if (branch.left !== undefined) {
        cbBinaryTree(branch.left);
      }
      if (branch.right !== undefined) {
        cbBinaryTree(branch.right);
      }

    }
    cbBinaryTree(this);
  }

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
// expect(binarySearchTree.insert).to.be.a("function");
//    expect(binarySearchTree.contains).to.be.a("function");
//    expect(binarySearchTree.depthFirstLog).to.be.a("function");
// treeMethods.addChild = function(value) {
//   var newChild = Tree(value);
//   this.children.push(newChild);
// };

// treeMethods.contains = function(target) {
//   var targetFound = false;

//   function searchTree(tree) {
//     if (tree.value === target) {
//       return targetFound = true;
//     }
//     if (tree.children.length > 0) {
//       for (var i = 0; i < tree.children.length; i++) {
//         searchTree(tree.children[i]);
//       }
//     }
//     return targetFound;
//   }
//   return searchTree(this);
// };
// 	 5
// 2	      9
//  1	  3      6
// 	4
