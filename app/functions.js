exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj, obj.greeting, obj.name);
  },

  functionFunction: function(str) {
    var output = str;
    function innerFunction( anotherStr ) {
      output = output + ', ' + anotherStr;
      return output;
    }
    return innerFunction;
  },

  makeClosures: function(arr, fn) {
    var funcsArr = [];
    for (var i = 0; i < arr.length; i++) {
      (function( x ) {
        funcsArr.push(function() {
          return arr[x] * arr[x];
        });
      })(i);
    }

    return funcsArr;
  },

  partial: function(fn, str1, str2) {
    return fn.bind(null, str1, str2);
  },

  useArguments: function() {
    return Array.prototype.reduce.call( arguments, function(a,b) {
      return a+b;
    },0);
  },

  callIt: function(fn) {
    var argsArr = Array.prototype.slice.call(arguments, 1); //without the function
    fn.apply(null,argsArr);
  },

  partialUsingArguments: function(fn) {
    var prevArgs = Array.prototype.slice.call(arguments, 1); //without the function
    return function() {
      var newArgs = Array.prototype.slice.call(arguments),
          args = prevArgs.concat(newArgs);

      return fn.apply(null, args);
    };
  },

  curryIt: function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return fn.call(null, a,b,c);
        }
      }
    }
  }
};
