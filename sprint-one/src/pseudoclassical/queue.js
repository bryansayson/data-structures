var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.handled = 0;

};

Queue.prototype.enqueue = function(value) {
  this[this.counter] = value;
  this.counter++;
};
Queue.prototype.dequeue = function() {
  if (this.handled < this.counter) {
    this.handled++;
  }
  return this[this.handled - 1];
};
Queue.prototype.size = function() {
  return this.counter - this.handled;
};
