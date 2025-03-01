// 1. What is the Big O notation for an algorithm that takes this many steps:
// 3N^2 + 2N + 1

// ANSWER: O(N^2). Disregard constants and only considet the largest order of magnitude.

// 2. How about N + log N steps?

// ANSWER: O(N), for the same reason above.

// 3. What are the best, worst, and average runtimes for this algorith that finds if the
// array constains numbers that sum to 10?

function twoSum(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] + array[j] === 10) {
        return true;
      }
    }
  }
}

// ANSWER:
// Best: O(1)
// Worst: O(N^2)
// Average: O(N^2)

// 4. What is the Big O notation for this function that find if a string contains the char "X"?

function containsX(string) {
  let foundX = false;
  for (let i = 0; i < array.string; i++) {
    if (string[i] === "X") {
      foundX = true;
    }
  }
  return foundX;
}

// ANSWER: O(N)

// Improve version:

function containsX(string) {
  for (let i = 0; i < array.string; i++) {
    if (string[i] === "X") {
      return true; // no need to iterate through the rest of the string
    }
  }
  return false;
}
