// this loop depends the number in n

const sumAll = (n) => {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
};

// there are only 3 opertaions here
// one Mulitplication, one division, on addition
const sumAll2 = (n) => {
  return (n * (n + 1)) / 2;
};

let arr = [2, 3, 4, 5, 6];
let arr2 = [2, 4, 6, 8, 10];

const allEven = (arr) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return false;
    }
  }
  console.log(true);
};

allEven(arr);

const double = (nums) => {
  let doubleDumbs = [];
  for (let i = 0; i < nums.length; i++) {
    doubleDumbs.push(nums[i] * 2);
  }
  return doubleDumbs;
};
