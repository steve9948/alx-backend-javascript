export default function hasValuesFromArray(set, array) {
  // Iterate through each value in the array
  for (const value of array) {
    // Check if the set does not contain the current value
    if (!set.has(value)) {
      // If the value is not present in the set, return false
      return false;
    }
  }
  // If all values are present in the set, return true
  return true;
}
