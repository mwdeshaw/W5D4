// bubbleSort

Array.prototype.bubbleSort = function() {
  let not_sorted = true;
  while (not_sorted) {
     not_sorted = false;
    for(var i = 0; i < this.length - 1; i++) {
      // console.log(this[i]);
      if (this[i] > this[i+1]) {
        let term = this[i];
          this[i] = this[i+1];
          this[i+1] = term;
         not_sorted = true;
      }
    }
  }
  return this;
};

// function swapper(arr) {
//   let term = arr.shift;
//   arr.push(term);
//   return arr;
// };


//substrings
String.prototype.subStrings = function() {
  substrings = [];
  for(var i = 0; i < this.length; i++) {
    for(var j = i; j < this.length; j++) {
      substrings.push(this.slice(j));
    }
  }

  return substrings;
};


