// we first need a help function that takes two sorted arrays and returns a new array with all elements in order
//should run in O(n + M) time and be pure(not mutate the arrays)

/**
 * Create en empty out array
 * Start points at the beginnings of arrays a and b
 *  if avalue <= b value, push a value to out and increase a pointer
 *  else
 *  push b value to out and increase b pointer
 *
 * once we exhaust one array we push all remianing values to the results array
 */

function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  //two while loops responsible for dealing with out of bounds array items
  //if j got to big this will run
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  // if i got too big this will run
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

/**
 * mergeSort
 *
 * should split array into halves until you have arrays that have length of 0 or 1
 * merge split arrays and return the merged and sorted array
 *
 */

function mergeSort(arr) {
  //base case
  debugger;
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
  //typical case
}

/**
 *
 *
 *  * mergeSort([3,2,70,48])
 *          mergeSort([3,2])
 *              mergeSort([3])
 *                  // we hit the base case and left = [3]
 */
