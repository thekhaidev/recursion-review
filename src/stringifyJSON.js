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
  // If Obj is Array
  if (Array.isArray(obj)) { // [8],
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
    }
    resultArray += ']';
    return resultArray;
  }

  // If obj is Object
  if (typeof(obj) === 'object') { //{'a': 'apple'},
    var resultObj = '{';
    for (var key in obj) {
      // If key is defined and not a function
      if ((typeof(obj[key]) !== 'undefined') && (typeof(obj[key]) !== 'function')) {
        resultObj += '"' + key + '"' + ':';
        var value = stringifyJSON(obj[key]);
        resultObj += value + ',';
      } else {
        continue;
      }
    }

    if (resultObj.length > 2) {
      resultObj = resultObj.slice(0, resultObj.length - 1);
    }
    resultObj += '}';
  }

  return resultObj;
};



