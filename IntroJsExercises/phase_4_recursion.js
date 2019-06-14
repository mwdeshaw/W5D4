//range
function range(start, end) {
  if (start === end) {
    return [start];
  }
 return [start].concat(range(start+1, end));
};

//sumRec

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr.shift() + sumRec(arr);
};


// exponent

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
};

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  }
  else if (exp === 1) {
    return base; 
  }
  if (exp % 2 === 0) {
    return exponent(base, exp / 2) ** 2;
  } else {
    return base * (exponent(base, (exp - 1) / 2 ) ** 2);
  }
}

// fibonacci

// function fibonacci(n) {
//   if (n < 1) {
//     return [];
//   }
//   else if (n === 1) {
//     return [1];
//   }
//   else if (n === 2) {
//     return [1, 1];
//   }

//   let fibArr = fibonacci(n-1);
//   fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);

//   // return (n - 1).push(fibonaci(n-2] + fibonacci(n-2)[n-3]);
// }