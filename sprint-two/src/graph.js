var Graph = function() {
  this.values = [];
  this.edges = {};
};

Graph.prototype.addNode = function(node) {
  this.values.push(node);

};

Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.values.length; i++) {
    if (this.values[i] === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.values.length; i++) {
    if (this.values[i] === node) {
      this.values = this.values.slice(0, i).concat(this.values.slice(i + 1));
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  var booledge = false;
  if (this.edges[fromNode].indexOf(toNode) >= 0) {
    booledge = true;
  }
  return booledge;
};

Graph.prototype.addEdge = function(fromNode, toNode) {

  if (!this.edges[fromNode]) {
    this.edges[fromNode] = [toNode];
  } else {
    this.edges[fromNode].push(toNode);
  }
  if (!this.edges[toNode]) {
    this.edges[toNode] = [fromNode];
  } else {
    this.edges[toNode].push(fromNode);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode) {};

Graph.prototype.forEachNode = function(cb) {
  _.each(this.values, function(val) {
    cb(val);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// values = [kittens, puppies, seals]
// edges = {
//   "kittens": [seals, puppies];
//   seals: kittens];
//   "puppies" = [kittens]
// }
