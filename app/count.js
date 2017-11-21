exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

  	var timedCounter = setInterval( function fnLogAndIncrement() {
  		if( start <= end ) {
  			console.log( start );
  			start++;
  		}
  		return fnLogAndIncrement;
  	}(), 100);


  	return {
  		cancel : function() {
  			clearInterval(timedCounter);
  		}
  	}
  }
};
