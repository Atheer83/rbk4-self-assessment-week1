var Stack = function() {
    this._storage = [];
    this.add = function(){
      // write me
      this._storage.push(value);
    };
    this.remove = function() {
      // write me
      if (this._storage) {
      return this._storage.pop();
    }
      return;
    };
  };