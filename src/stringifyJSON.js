// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //if obj was a number, null or boolean
  //return stringified version
  if ((typeof(obj) === 'boolean') || (typeof(obj) === 'number')) {
    return obj.toString();
  }

  if (obj === null) {
    return 'null';

  }

  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) { // [8],
    // If Obj is Array
    // Start Accumulator
    // If length !== 1 += stringify.obj + , + space
    // If length === 1 end add bracket ]
    var resultArray = '[';

    for (var i = 0; i < obj.length; i++) { //[8, 'hi'],
      var currentElement = obj[i];
      if (resultArray.length !== 1) {
        resultArray += ',' + stringifyJSON(currentElement);
      } else {
        resultArray += stringifyJSON(currentElement);
      }
    //   resultArray += stringifyJSON(currentElement);
    //   resultArray += ', ';
    }
    resultArray += ']';
    return resultArray;
    // if (obj.length > 1) {
    //   resultArray += ', ';
    // } else {
    //   resultArray += ']';
    // }
  }
  // resultArray.slice(0, resultArray.length - 1) + ']';
  // return resultArray;
};



