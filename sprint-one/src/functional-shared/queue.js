var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
    counter: 0,
    handled: 0
  }
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {

  enqueue: function(value) {
    this[this.counter] = value;
    this.counter++;
  },

  dequeue: function() {
    if (this.handled < this.counter) {
      this.handled++;
    }
    return this[this.handled - 1];
  },

  size: function() {
    return this.counter - this.handled;
  }

};

// queueMethods[enqueue] = function(value){
//     this[this.counter] = value;
//     this.counter++;
//   };

// queueMethods[dequeue] = function(){
//     if (this.handled < this.counter) {
//       this.handled++;
//     }
//     return this[this.handled - 1];
//   };
//   queueMethods[size] = function(){
//     return this.counter - this.handled;
//   };
