var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.counter = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};
var stackMethods = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  pop: function() {
    if (this.counter > 0) {
      this.counter--;
    }
    return this.storage[this.counter];
  },
  size: function() {
    return this.counter;
  }
};
// var giraffeMaker = function(name, height) {
//   var newGiraffe = {};
//   newGiraffe.name = name;
//   newGiraffe.height = height;
//   newGiraffe.hunger = 10;
//   extend(newGiraffe, giraffeMaker.giraffeMethods);
//   return newGiraffe;
// };
// giraffeMaker.giraffeMethods.say = function(option) {
//   var sentences = {
//     'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
//     'notHungry': this.name + ' is not hungry.',
//     'notTallEnough': this.name + ' is too short to reach the trees.',
//     'ate': 'That was delicious!'
//   };
