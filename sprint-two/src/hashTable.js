var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._length = 0;
};

HashTable.prototype.insert = function(k, v) {
  console.log(this._storage);
  if (this._length >= this._limit - 2) {
    this._limit = this._limit * 2;
    var tempStorage = [];

    for (var key in this._storage) {
      for (var i = 0; i < this._storage[key].length; i++) {
        if (Array.isArray(this._storage[key][i])) {
          tempStorage.push(this._storage[key][i]);
        };
      }
    };
    this._storage = LimitedArray(this._limit);
    for (var i = 0; i < tempStorage.length; i++) {
      this.insert(tempStorage[i][0], tempStorage[i][1]);
    };
  }
  //

  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i] === undefined) {
    this._storage[i] = [];
  }
  var temp = [k, v];
  this._storage[i].push(temp);
  this._length++;

};

HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var z = 0; z < this._storage[i].length; z++)
    console.log("WHAT IS 0")
    console.log("ZZZZ :" + i);
    console.log(this._storage[i][0]);
    if (this._storage[i][z][0] === k) {
      return this._storage[i][z][1];
    }

};

HashTable.prototype.remove = function(k) {

  this._length -= 1;
  // console.log("limit: " + this._limit);
  // console.log("length: " + this._length);
  // if (this._length <= (this._limit / 2) + 1) {
  //   console.log("HALVING");
  //   this._limit = this._limit / 2;
  //   console.log("new limit: " + this._limit);
  //   var tempStorage = [];

  //   for (var key in this._storage) {
  //     for (var i = 0; i < this._storage[key].length; i++) {
  //       if (Array.isArray(this._storage[key][i])) {
  //         tempStorage.push(this._storage[key][i]);
  //       };
  //     }
  //   };
  //   this._storage = LimitedArray(this._limit);
  //   for (var i = 0; i < tempStorage.length; i++) {
  //     this.insert(tempStorage[i][0], tempStorage[i][1]);
  //   };
  // }

  // var i = getIndexBelowMaxForKey(k, this._limit);
  // // _.each(this._storage[i], function(val) {

  console.log(this._storage);

  for (var x in this._storage) {

    if (Array.isArray(this._storage[x])) {
      for (var y = 0; y < this._storage[x].length; y++) {

        console.log("KEY?");
        console.log(this._storage[x]);
        if (Array.isArray(this._storage[x]) && this._storage[x][y][0] === k) {
          console.log("VAL")
          console.log(this._storage[x][y]);
          console.log("DELETING: " + this._storage[x]);
          this._storage[x] =  this._storage[x].slice(0, y).concat(this._storage.slice(y+1));
        }
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
