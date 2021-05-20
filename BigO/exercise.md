# Basic simplifications

1.  O(n + 10)
    - Simplified to O(n)
    - simple arithimatic operations can be negated
2.  O(100 \* n)
    - Same as above O(n)
3.  O(25)
    - O(1)
4.  O(n^2 + n^3)
    - O(n^3)
5.  O(n + n + n + n)
    - O(n)
6.  O(1000 \* log(n) + n)
    - O(n)
7.  O(1000 _ n _ log(n) + n)
    - O(nlog(n))
8.  O(2^n + n^2)
    - O(2^n)
9.  O(5 + 3 + 1)
    - O(1)
10. "O(n + n^(1/2) + n^2 + n \* log(n)^10)"
    - O(n^2)

# Function Time Complex

```javascript
function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
```

1. O(n)

```javascript
function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
```

2. O(n)

```javascript
function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
```

3.O(1)

```javascript
function onlyElementsAtEvenIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
```

4.O(n)

```javascript
function subtotals(array) {
  let subtotalArray = [];
  for (let i = 0; i < array.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray.push(subtotal);
  }
  return subtotalArray;
}
```

5. O(n^2)

# True or False SHORT ANSWER

- True or false: n^2 + n is O(n^2). TRUE
- True or false: n^2 \* n is O(n^3). TRUE
- True or false: n^2 + n is O(n). FALSE
- What’s the time complexity of the .indexOf array method? O(n)
- What’s the time complexity of the .includes array method? O(n)
- What’s the time complexity of the .forEach array method? O(n)
- What’s the time complexity of the .sort array method? O(n log n)
- What’s the time complexity of the .unshift array method? O(n)
- What’s the time complexity of the .push array method? O(1)
- What’s the time complexity of the .splice array method? O(n)
- What’s the time complexity of the .pop array method? O(1)
- What’s the time complexity of the Object.keys() function? O(n)
