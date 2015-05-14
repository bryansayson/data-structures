var Queue = function(){
  var someInstance = {};
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var handled = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance[counter] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    if (handled < counter) {
      handled++;
    }
    return someInstance[handled-1];
  };

  someInstance.size = function(){
    return counter-handled;
  };

  return someInstance;
};