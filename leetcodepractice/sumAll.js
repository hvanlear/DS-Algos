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
