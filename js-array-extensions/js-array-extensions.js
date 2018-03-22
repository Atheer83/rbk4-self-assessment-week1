// your code here
Array.prototype.first = function() {
	return this[0];
};
Array.prototype.last = function() {
	var lastIdx = this.length - 1 ;
	return this[lastIdx];
};
