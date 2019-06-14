//unique
Array.prototype.uniq = function() {
  uniques = [];
  for(var i = 0; i < this.length; i++) {
    if (uniques.indexOf(this[i]) === -1) {
      uniques.push(this[i]);
    }
  }

  return uniques;
};

// let sample = [1, 1, 1, 2, 3, 4, 5, 5, 6];
// console.log(sample.uniq());

Array.prototype.twoSum = function() {
  pairs = [];
  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i+1; j < this.length; j++) {
      if ((this[i] + this[j]) === 0) {
        pairs.push([i, j]);
      } 
    }
  }

  return pairs;
};

// let example = [-1, 1, 5, 8, -4, -8];
// console.log(example.twoSum());

Array.prototype.transpose = function() {
  transposed = [];
  helper = this[0].length;
  while (transposed.length < helper) {
    transposed.push([]);
  }
  
  for(var i = 0; i < this.length; i++) {
    let subArr = this[i];
    for (var j = 0; j < subArr.length; j++) {
      transposed[j].push(this[i][j]);
    }
  }
  return transposed;
};
// let sampe = [[1,2,3], [4,5,6]];
// console.log(sampe.transpose());