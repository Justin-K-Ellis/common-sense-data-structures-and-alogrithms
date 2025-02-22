// 1.
function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
// Answer: O(1) (also O(N) since the function only takes one piece of data.)

// 2.
function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
// Answer: O(N). The processes iterates through all elements in the array.

// 3.
function chessboardSpace(numOfGrains) {
  let chessboardSpaces = 1;
  let placedGrains = 1;

  while (placedGrains < numOfGrains) {
    placedGrains *= 2;
    chessboardSpaces += 1;
  }

  return chessboardSpaces;
}
// Answer: The textbook calls this O(log N) since it assumes the size of the data is
// whatever value numOfGrains has. But this is actually a bit perverse since the input
// appears to be a single integer.

// 4.
function selectAStrings(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].startsWith("a")) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
// Answer: O(N). This iterates through each item in the array.

// 5.
function median(array) {
  const middle = Math.floor(array.length / 2);

  // If array has even amount of numbers:
  if (array.length % 2 === 0) {
    return (array[middle - 1] + array[middle + 1]) / 2;
  } else {
    // If array size is odd.
    return array[middle];
  }
}
// Answer: O(1);
