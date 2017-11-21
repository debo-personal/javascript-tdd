exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	var counter = start;
  	var timedCounter = setInterval( function() {
  		while( counter <= end ) {
  			console.log( counter );
  			counter++;
  		}
  	}, 100);
  }
};
