var makeHashTable = function() {
  //Do not change the max!
  var max = 4;
  var bucket = [];
  var tuble = [];
  var result = false;
    return {
      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
        //your code is here
        var idx = this._storage[hashFn(key, max)];
        if (!idx) {
          tuble[0] = key;
          tuble[1] = value;
          bucket.push(tuble);
        }
        else {
          tuble[0] = key;
          tuble[1] = value;
          for (var i = 0; i < bucket.length; i++) {
           if(bucket[i][0] === key) {
            bucket[i][1] = value;
            result = true;
            break;
           } 
          }
          if (!result)
          bucket.push(tuble);
        }
        //this._storage[hashFn(key, max)] = value;
    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};