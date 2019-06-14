//myEach

Array.prototype.myEach = function(cb) {
  
  for(var i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

//myMap
Array.prototype.myMap = function(cb) {
  let mapped = [];
  this.myEach(function(ele) {
    mapped.push(cb(ele));
  })

  return mapped;
};

//myReduce
Array.prototype.myReduce = function(cb, initialVal = this.shift() ) {
  // console.log(initialVal);
  // console.log(this);
  let myResult = initialVal;
  this.myEach(function(el) {
    myResult = cb(myResult, el); 
  })
  return myResult;
};


