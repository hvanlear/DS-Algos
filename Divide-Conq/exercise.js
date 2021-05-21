// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a
// function called countZeroes, which returns the number of zeroes in the array.

const countZeroes = (arr) => {
  let leftIdx = 0;

  if (arr[leftIdx] === 0) return arr.length;

  //starting the left if it is a 1 then we want to shift the left over 1
  // then if we find a zero then we want to return the number of indexs from that position the the last
  while (leftIdx <= rightIdx) {
    if (arr[leftIdx] === 1) {
      leftIdx += 1;
    } else {
      return arr.length - leftIdx;
    }
  }
};
// countZeroes([1, 0, 0, 0, 0]);

const sortedFrequency = (arr, num) => {
  //   debugger;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  //   if (arr[leftIdx] && arr[rightIdx] === num) return arr.length;

  //check middle index if it contains the number we are looking for

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let midVal = arr[midIdx];

    if (midVal && arr[rightIdx] === num) {
      leftIdx = midIdx;
      if (arr[leftIdx] - 1 === num) {
        leftIdx -= 1;
      }
      return arr.length - midIdx;
    }
  }
};

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3);
