(function() {
  'use strict';
  //this code is required for the test suite to run, do not modify
  if (typeof global === 'object') {
    //_ = {};
    global._ = {};
  }
  if (typeof window === 'object') {
    //_ = {};
    window._ = {};
  }

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
    /* START SOLUTION */
    return val;
    /* END SOLUTION */
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    /* START SOLUTION */
    var result = [];

    if (n === undefined) {
      return array[0];
    }
    if (n > array.length) {
      return array;
    }
    if (arguments[1].typeof === "object") {
      return [];
    }
    for (var i = 0; i < n; i++) {
      result.push(array[i]);
    }

    return result;  // --------------------------
    /* END SOLUTION */
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    /* START SOLUTION */

    var result = [];

    if (n === undefined) {
      return array[array.length-1];
    }

    if (n > array.length) {
      return array;
    }

    if (array.length === 0 || n === 0) {
      return result;
    }

    for (var i = array.length - n; i < array.length; i++) { // [1,2,3,4,5]
      result.push(array[i]);
    }

     return result;

    /* END SOLUTION */
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
    /* START SOLUTION */

    if (Array.isArray(collection) === true) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else if (typeof(collection) === 'object'){
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    }
    // var result = iterator(collection.each);
    // return result;

    /* END SOLUTION */
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    /* START SOLUTION */

    // if array.indexOf(target) === undefined) {
    //   return -1;
    // } else {
    //   return array.indexOf(target);
    // }

    if (arguments.length > 2) {
      for (var i = arguments[2]; i < array.length; i++) {
        if (array[i] === target) {
          return i;
        }
      }
    }

    for (var i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return -1;
    /* END SOLUTION */
  };


  //Create a function for findIndex to test its existence
  _.findIndex = function(array, test){
    /* START SOLUTION */

    for (var i = 0; i < array.length; i++) {
      if (test(array[i]) === true) {
        return i;
      }
    }

    return -1;
    /* END SOLUTION */
  }

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {
    /* START SOLUTION */
    var result = [];

    for (var i = 0; i < collection.length; i++) {
      if (test(collection[i]) === true) {
        result.push(collection[i]);
      }
    }

    return result;
    /* END SOLUTION */
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    /* START SOLUTION */
    var result = [];

    for (var i = 0; i < collection.length; i++) {
      if (test(collection[i]) === false) {
        result.push(collection[i]);
      }
    }

    return result;
    /* END SOLUTION */
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array, isSorted, iterator) {
    /* START SOLUTION */

    if (array.length === 0) {
      return []; //[1]
    }

    var result = [];
    result.push(array[0]);

    if (isSorted === true) {
      //var x = 0;
      var value = array[0];

      for (var i = 0; i < array.length; i++) {
        //var x = 0
        //var value = array[x];

        if (array[i] !== result[result.length - 1]) { //[1,1,2,3,3,4,4]
          result.push(array[i]);
        }
      }
    } else {
      var value = array[0];

      for (var i = 0; i < array.length; i++) {
        //var x = 0
        //var value = array[x];

        if (array[i] !== result[result.length - 1]) { //[1,1,2,3,3,4,4]
          result.push(array[i]);
        }
      }
    }

    return result;
  }



    // var result = [];

    // var tempObject = {}; // 1: 1, 2: 1, 3: 2, 4: 1,
    // for (var i = 0; i < array.length; i++) {
    //   if (tempObject[array[i]] === undefined) { //[1,2,3,3,4]
    //     tempObject[array[i]] = 1;
    //   } else {
    //     tempObject[array[i]] += 1;
    //   }
    // }

    // for (var key in tempObject) {
    //   result.push(Number(key));
    // }

    // return result;

    // var x = 0


    /* END SOLUTION */



  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    /* START SOLUTION */
    var result = [];

    if (Array.isArray(collection) === true) {
    for (var i = 0; i < collection.length; i++) {
      result.push(iterator(collection[i], i));
    }
  } else {
    for (var key in collection) {
      result.push(iterator(key));
    }
  }

    return result;
    /* END SOLUTION */
  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    /* START SOLUTION */

    /* END SOLUTION */
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //
  _.reduce = function(collection, iterator, accumulator) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

}());
