function indexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

let sarr = [1, 2, 3, 4, 5, 6, 7, 8, 20, 30];

function binarySearch(arr, val) {
  //left most index starts at first element in array
  let leftIdx = 0;
  //right most index starts at the last ele in array
  let rightIdx = arr.length - 1;
  //start a while loop
  while (leftIdx <= rightIdx) {
    //at the start of each loop iteration designate a middle index of what ever array section is left
    // so at the start it is just the normal middle index but as the leftIdx and rightIdx pointers are changed, so does the middle
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    // the middle value will change as the middleIdx is shifted
    let middleVal = arr[middleIdx];

    // L         // M              //R
    // [1, 2, 3, 4, 5, 6, 7, 10, 20, 30]; target = 20
    if (middleVal < val) {
      // if the middle value is less than the target value we can now isolate the right side of the array
      //L    //M    //R
      // [1, 2, 3, 4, 5, 6, 7, 10, 20, 30]; target = 20
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      rightIdx = middleIdx - 1;
    } else {
      return middleIdx;
    }
  }
  return -1;
}

binarySearch(sarr, 20);
