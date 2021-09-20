// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // Input - Class name -- String
  // Output - Array that contain class
  // Create an empty container for results

  var classNames = [];

  var element = document.body;

  //Check if document has class name
  var getClass = function(element) {
    if (element.classList && element.classList.contains(className)) {
      classNames.push(element);
    }
    // Check for children elements
    element.childNodes.forEach(function(child) {
      getClass(child);

    });

  };
  // //return array

  // call that function
  // console.log(element.childNodes);
  getClass(element);

  return classNames;
};

