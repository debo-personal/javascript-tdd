exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	var eightBitStr = ("00000000" + num.toString(2)).slice(-8);
  	return parseInt(eightBitStr[ eightBitStr.length - bit]);
  },

  base10: function(str) {
  	return parseInt( str, 2);
  },

  convertToBinary: function(num) {
  	return ("00000000" + num.toString(2)).slice(-8);
  },

  multiply: function(a, b) {
  	var aDecimalPoints = findDecimalPoints(a),
  		bDecimalPoints = findDecimalPoints(b),
  		totalDecimalPoints = aDecimalPoints + bDecimalPoints;

  	return parseFloat((a * b).toFixed( totalDecimalPoints) );
  	function findDecimalPoints(num) {
		num = num + "";
	  	return (num.split('.')[1] || []).length;
	}
  }
};
