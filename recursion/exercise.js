// Write a function that finds the product of an array of numbers:
// product([2, 3, 4])   // 24

const {
  isPalindrome,
  findIndex,
} = require("./dsa-recursion-solution/recursion");

const product = (arr, i = 0) => {
  if (i === arr.length) return 0;

  return arr[i] + product(arr, i + 1);
};

// Given a list of words, return the length of the longest:

const longest = (arr) => {
  let long = arr[0];
  for (wrd of arr) {
    if (wrd.length > long.length) {
      long = wrd;
    }
  }
  return long;
};

//this returns the longest item in array, no length
function recursiveLongest(arr) {
  let longestStr = "";
  const check = (str) => {
    if (str.length > longestStr.length) longestStr = str;
  };
  function recursiveFn(arr) {
    arr.forEach((item) => {
      if (typeof item === "string") check(item);
      else recursiveFn(item);
    });
  }
  recursiveFn(arr);
  console.log(longestStr);
  return longestStr;
}

function recLongest(words, idx = 0, longestSoFar = 0) {
  //create function that takes a words array, starts index at 0 and
  //initalize the longesstSofar at 0
  if (idx === words.length) return longestSoFar;
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return recLongest(words, idx + 1, longestSoFar);
}

recLongest(["hello,", "bob", "bigjeff"]);

// Write a function that returns a string of every other character:

function everyOther(str) {
  let tmp = str.split("");
  for (let i = 0; i < tmp.length; i++) {
    if (i % 2 !== 0) {
      tmp[i] = "";
    }
  }
  tmp = tmp.join("");
  console.log(tmp);
}

function recEveryOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function recIsPalindrome(str, idx = 0) {
  debugger;
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;

  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function recFindIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return ridx;
  return findIndex(arr, val, idx + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function recGatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object")
      stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}
