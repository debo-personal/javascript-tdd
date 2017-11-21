exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	return new Promise( function( resolve, reject ) {
  		setTimeout(function(){
		    resolve( value );
		}, 10);
  	});
  },

  manipulateRemoteData: function(url) {
  	return new Promise( function(resolve, reject){
	    var xhr = new XMLHttpRequest();
	    xhr.open("GET", url);
	    
	    xhr.onload = function() {
	    	var responseText = xhr.responseText,
	    		responseObj = JSON.parse( responseText ),
	    		peopleArr = responseObj.people,
	    		outputArr;

	    	outputArr = peopleArr.map( function( people ) {
	    		return people.name;
	    	}).sort();
	    	
	    	resolve( outputArr );	
	    };
	    
	    xhr.onerror = function() {
	    	reject(xhr.statusText);
	    };
	    
	    xhr.send();
	});
  }
};
