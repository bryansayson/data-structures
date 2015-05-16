var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    list.tail = new Node(value);

    if (list.head === null) {
      list.head = list.tail;
    } else {
      var current = list.head;
      while (current.next) {
        current = current.next;
      }
      current.next = list.tail;
    }

  };

  list.removeHead = function() {
    var returnedHead = list.head;

    list.head = list.head.next;

    return returnedHead.value;

  };

  list.contains = function(target) {

    function searchHeads(searchthisHead) {
      var returnBoolean;
      if (searchthisHead.value === target) {
        returnBoolean = true;
      } else {
        if (searchthisHead.next === null ) {
          returnBoolean = false;
        } else {
          returnBoolean = searchHeads(searchthisHead.next);
        }
      }
      return returnBoolean;
    };
    return searchHeads(list.head);
  }

  return list;
}

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// function insertAfter(Node node, Node newNode) // insert newNode after node
//     newNode.next := node.next
//     node.next    := newNode

// searchNodes (node)

// searchNodes (node.children)
