exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d/g).test( str );
  },

  containsRepeatingLetter: function(str) {
    return (/([a-zA-Z]).*?\1/).test( str );
  },

  endsWithVowel: function(str) {
    return (/^[aeiou]$/i).test( str[str.length - 1] );
  },

  captureThreeNumbers: function(str) {
    var test = /[0-9]{3}/,
        result = test.exec(str);
    return result === null? false: result[0];
  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  isUSD: function(str) {
    return /^\${1}[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/.test( str );
  }
};
