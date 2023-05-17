// complete the given function

function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Compare characters from both ends of the string
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // Characters don't match, not a palindrome
    }

    left++;
    right--;
  }

  return true; // All characters matched, it's a palindrome
}

module.exports = palindrome;