// your code here
var ArrayExtension = function () {
	var someInstant = {};
	someInstant.Array = [];

_.extend (someInstant, someMethods);

	return someInstant;
}

var someMethods = {};

someMethods.first = function() {
	return this.Array[0];
};

someMethods.last = function() {
	return this.Array[Array.length - 1];
}
