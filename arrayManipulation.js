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
  
  /**
   * Function to format an array of strings based on a processed array of numbers.
   * Capitalizes the entire string if the corresponding number is even.
   * Converts the string to lowercase if the corresponding number is odd.
   * 
   * @param {string[]} strings - Array of strings to be formatted.
   * @param {number[]} processedNumbers - Processed array of numbers.
   * @returns {string[]} - New array with formatted strings.
   */
  function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
      if (processedNumbers[index] % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const processedNumbers = processArray(numbers);
  
  const strings = ["Hello", "World", "JavaScript", "is", "awesome"];
  const formattedStrings = formatArrayStrings(strings, processedNumbers);
  
  console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]
  console.log(formattedStrings); // Output: ['hello', 'WORLD', 'javascript', 'IS', 'awesome']
  