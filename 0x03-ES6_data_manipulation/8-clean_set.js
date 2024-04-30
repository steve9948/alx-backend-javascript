export default function cleanSet(set, startString) {
  // Initialize an array to store cleaned strings
  const strings = [];

  // Check if the startString is empty or not a string
  if (startString === '' || typeof startString !== 'string') {
    // If so, return an empty string
    return '';
  }

  // Iterate over each element in the set
  set.forEach((s) => {
    // Check if the element is a string and starts with the startString
    if (typeof s === 'string' && s.startsWith(startString)) {
      // If so, remove the startString from the element and add it to the strings array
      strings.push(s.slice(startString.length));
    }
  });

  // Join the strings array elements with hyphens and return the result
  return strings.join('-');
}
