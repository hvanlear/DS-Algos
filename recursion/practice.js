// Return the sum of a list using recursion

const nums = [3, 4, 5];

const sum = (arr) => {
  //base case
  if (arr.length === 0) return 0;
  //normal case
  return nums[0] + sum(arr.slice(1));
};

// For every number in array print the value doubled BUT some of the items can be lists themselves

function doubler(nums) {
  for (let n of nums) {
    console.log(n * 2);
  }
}

function doubler(nums) {
  for (let n of nums) {
    if (Array.isArray(n)) {
      for (let o of n) console.log(o * 2);
    } else {
      console.log(n * 2);
    }
  }
}

function doubler(nums) {
  for (let n of nums) {
    if (Array.isArray(n)) {
      for (let o of nums) {
        if (Array.isArray(o)) {
          for (let p of o) console.log(p * 2);
        } else {
          console.log(o);
        }
      }
    } else {
      console.log(n * 2);
    }
  }
}

function doubler(nums) {
  stack = nums.reverse();

  while (stack.length > 0) {
    let n = stack.pop();
    if (Array.isArray(n)) {
      // If array, add it to stack, reversed
      for (let inner of n.reverse()) {
        stack.append(inner);
      }
    } else {
      console.log(n * 2);
    }
  }
}

function recursiveDoubler(nums) {
  for (let n of nums) {
    if (Array.isArray(n)) {
      doubler(n);
    } else {
      console.log(n * 2);
    }
  }
}
