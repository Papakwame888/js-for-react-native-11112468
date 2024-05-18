// arrayManipulation.js

/**
 * Function to process an array of numbers.
 * Each even number is squared, and each odd number is tripled.
 * 
 * @param {number[]} numbers - Array of numbers to be processed.
 * @returns {number[]} - New array with processed numbers.
 */
function processArray(numbers) {
    return numbers.map(number => {
      if (number % 2 === 0) {
        return number * number;
      } else {
        return number * 3;
      }
    });
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const processedNumbers = processArray(numbers);
  
  console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]
  