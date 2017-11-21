exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	var requestedDir = data;
  	if( dirName ) {
  		requestedDir = findRequestedDir( data, dirName );	
  	}
  	
  	var listOfFiles = [],
      	filesArr = requestedDir.files;

    for (var i = 0; i < filesArr.length; i++) {
      if(typeof filesArr[i] === 'object' ) {
        var files = this.listFiles( filesArr[i] );
        listOfFiles = listOfFiles.concat( files );
      }
      else {
        listOfFiles.push(filesArr[i]);
      }
    }

    return listOfFiles;

  	function findRequestedDir( data, dirName ) {
  		if(data.hasOwnProperty('dir') && data.dir == dirName) {
  			return data;
  		}
  		else {
  			for (var i = 0; i < data.files.length; i++) {
  				if(typeof data.files[i] === 'object' ) {
  					return findRequestedDir( data.files[i], dirName);
  				}
  			};
  		}
  	}
  },

  permute: function(arr) {
    var results = [];

    function permuteArr(inputArr, memo) {
      var cur,
        memo = memo || [];

      for (var i = 0; i < inputArr.length; i++) {
        cur = inputArr.splice(i, 1);
        if (inputArr.length === 0) {
          results.push(memo.concat(cur));
        }
        permuteArr(inputArr.slice(), memo.concat(cur));
        inputArr.splice(i, 0, cur[0]);
      }

      return results;
    }

    return permuteArr(arr);
  },

  fibonacci: function(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else if (n >= 2) {
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  },

  validParentheses: function(n) {
    if (n == 0)
        return [""];

    var result = [];
    for (var i = 0; i < n; ++i) {

        var lefts = this.validParentheses(i);
        var rights = this.validParentheses(n - i - 1);

        for (var l = 0; l < lefts.length; ++l)
            for (var r = 0; r < rights.length; ++r)
                result.push("(" + lefts[l] + ")" + rights[r]);
    }

    return result;
  }
};
