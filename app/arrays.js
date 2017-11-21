exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf( item );
  },

  sum: function(arr) {
    return arr.reduce( function( a, b) {
      return a + b;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(function( currItem ) {
      return currItem !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    var index = arr.indexOf( item );
    if( index !== -1 ) {
      do {
        arr.splice( index, 1);
        index = arr.indexOf( item );
      }
      while( index !== -1) 
    }
    
    return arr;
  },

  append: function(arr, item) {
    arr.push( item );
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift( item );
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat( arr2 );
  },

  insert: function(arr, item, index) {
    arr.splice( index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter( function( currItem ) {
      return currItem === item;
    }).length;
  },

  duplicates: function(arr) {
    var duplicatesArr = [],
        uniqueObj = {};

    for (var i = 0; i < arr.length; i++) {
      if( uniqueObj.hasOwnProperty(arr[i]) && duplicatesArr.indexOf( arr[i] ) === -1) {
        duplicatesArr.push( arr[i] );
      }
      else {
        uniqueObj[ arr[i] ] = true;
      }
    }

    return duplicatesArr;
  },

  square: function(arr) {
    return arr.map( function( item ) {
      return item * item;
    });
  },

  findAllOccurrences: function(arr, target) {
    var outputArr = [];
    for (var i = 0; i < arr.length; i++) {
      if( arr[i] === target ) {
        outputArr.push( i );
      }
    }
    return outputArr;
  }
};
