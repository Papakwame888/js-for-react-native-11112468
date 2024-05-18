// userInfo.js

/**
 * Function to create user profiles.
 * Each profile contains the original name, modified name, and an auto-incremented ID.
 * 
 * @param {string[]} originalNames - Array of original names.
 * @param {string[]} modifiedNames - Array of modified names.
 * @returns {Object[]} - Array of user profile objects.
 */
function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => {
      return {
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
      };
    });
  }
  
  // Example usage:
  const originalNames = ["Alice", "Bob", "Charlie", "David", "Eva"];
  const modifiedNames = ["ALICE", "bob", "CHARLIE", "david", "EVA"];
  const userProfiles = createUserProfiles(originalNames, modifiedNames);
  
  console.log(userProfiles);
  // Output:
  // [
  //   { id: 1, originalName: 'Alice', modifiedName: 'ALICE' },
  //   { id: 2, originalName: 'Bob', modifiedName: 'bob' },
  //   { id: 3, originalName: 'Charlie', modifiedName: 'CHARLIE' },
  //   { id: 4, originalName: 'David', modifiedName: 'david' },
  //   { id: 5, originalName: 'Eva', modifiedName: 'EVA' }
  // ]