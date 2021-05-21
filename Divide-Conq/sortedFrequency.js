function findFirst(arr, num, low = 0, high = arr.length - 1) {
  debugger;

  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
      return mid;
    } else if (num > arr[mid]) {
      return findFirst(arr, num, mid + 1, high);
    } else {
      return findFirst(arr, num, low, mid - 1);
    }
  }
  return -1;
}

findFirst([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 5, 5], 3);
