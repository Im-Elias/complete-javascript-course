// Remember, we're gonna use strict mode in all scripts now!
"use strict";

function squareSum(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}
