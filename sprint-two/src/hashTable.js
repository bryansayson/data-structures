var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._length = 0;
};

HashTable.prototype.insert = function(k, v) {

  var i = getIndexBelowMaxForKey(k, this._limit);
  var tempArray = [k,v];

    if ( !this._storage[i] ) {
      this._storage[i] = [];
    }

    ///////// DOUBLING START

    if ( this._length >= this._limit - 2) {
      this._limit *= 2;
      var tempStorage = [];
      for ( var key in this._storage ) {
        if ( Array.isArray( this._storage[ key ] )) {
          _.each( this._storage[key], function( tuple ) {
            tempStorage.push(tuple);
          });
        }
      }

    this._storage = LimitedArray(this._limit);
    this._length = 0;

    for (var x = 0; x < tempStorage.length; x++) {
      this.insert(tempStorage[x][0], tempStorage[x][1]);
    }   
  }

    ///////// DOUBLING END

  this._storage[i].push(tempArray);
  this._length++;
};

HashTable.prototype.retrieve = function(k) {

  var i = getIndexBelowMaxForKey(k, this._limit);
  var retrieved = null;

      _.each (this._storage[i], function (array) {
        if ( array[0] === k ) {
          retrieved = array[1]; 
        }
      });

    return retrieved;

};

HashTable.prototype.remove = function(k) {
  this._length--;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var limitHalved = this._limit / 2;
    /////// HALVING START

    if ( this._length  <= limitHalved - 1 ) {
  
      this._limit /= 2;
      var tempStorage = [];

      for ( var key in this._storage ) {
        if ( Array.isArray( this._storage[ key ] )) {
          _.each( this._storage[key], function( tuple ) {
            tempStorage.push(tuple);
          });
        }
      }

    this._storage = LimitedArray(this._limit);   
    for (var x = 0; x < tempStorage.length; x++) {
      
      var i = getIndexBelowMaxForKey([x][0], this._limit);
      var tempArray = [ tempStorage[x][0], tempStorage[x][1] ];
      
      if ( !this._storage[i] ) {
        this._storage[i] = [];
      }

      this._storage[i].push(tempArray);
      this._length++;

    }   
  }

    /////// HALVING END 


      _.each (this._storage[i], function (array, index, list) {
        if ( array[0] === k ) {
        list.splice(index, 1);
        }
      });

  

};

    // console.log("RUN");
    //   console.log("limit" + this._limit);
    //   console.log("length" + this._length);

/*
 * Complexity: What is the time complexity of the above functions?
 */

// storage :
// {
//   "1" : adsf,
//   "2" : asd;f,
//   "3" : adsfsdf
// }

//why can't we modify list?
      // if ( array[0] === k ) {
      //     console.log( index );
      //     console.log( "list" + list);
      //     console.log("first half" + ":" + list.slice(0, index) )
      //     console.log("second half" + ":" + list.slice(index+1)  )
      //    list = list.slice(0, index).concat( list.slice(index+1) );
      //    console.log( "list" + list);
      //   }
      // });