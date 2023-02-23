function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(15);
// This function takes an integer n as input and loops from 1 to n, checking each number for whether it's divisible by 3, 5, or both. If a number is divisible by 3, it prints "Fizz"; if it's divisible by 5, it prints "Buzz"; if it's divisible by both, it prints "FizzBuzz"; and if it's not divisible by either, it just prints the number. The fizzBuzz(15) call at the bottom of the code will print the output for the first 15 numbers in the sequence.


// Palindrome
// A palindrome is a string that reads the same forwards and backwards. For example, "racecar" is a palindrome because it's the same word whether you read it forwards or backwards.
function isPalindrome(str) {
  // Reverse the string and compare it to the original
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
// This function splits the input string into an array of characters, then reverses the order of the characters and joins them back into a string. Finally, it compares the reversed string to the original string and returns true if they are the same, indicating that the input string is a palindrome.

// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("12345")); // "54321"
// This function works similarly to the isPalindrome function above. It splits the input string into an array of characters, reverses the order of the characters, and then joins them back into a string to produce the reversed string.


// Fibonacci sequence
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first two numbers in the sequence are 0 and 1.
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(10)); // 55
// This function uses recursion to calculate the nth number in the Fibonacci sequence. If n is 0 or 1, it returns n. Otherwise, it recursively calls itself with n-1 and n-2 as inputs, and adds the results together to get the nth Fibonacci number.

// Prime numbers
// A prime number is a positive integer that can only be divided evenly by 1 and itself. For example, 2, 3, 5, 7, 11, 13, etc. are prime numbers.
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(11)); // true
// This function checks whether n is less than 2 (which is not prime), and then loops through all integers from 2 to n-1 to check whether any of them evenly divide n. If n is divisible by any of these integers, it's not prime and the function returns false. Otherwise, the function returns true. Note that this function is not very efficient for large values of n, since it checks every


// Anagram
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase. For example, "listen" and "silent" are anagrams.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const charCount = {};
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!charCount[char]) {
      return false;
    } else {
      charCount[char]--;
    }
  }
  return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
// This function first checks whether the two input strings are the same length. If they're not, they can't be anagrams and the function returns false. Otherwise, it creates an object called charCount to keep track of the number of times each character appears in the first string (str1). It then loops through str1, incrementing the count for each character in charCount. Finally, it loops through str2, decrementing the count for each character in charCount. If any count becomes negative, it means str2 has more of that character than str1, and the function returns false. Otherwise, it returns true, indicating that str2 is an anagram of str1.

// Array multiplication
function multiplyArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return null;
  }
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] * arr2[i]);
  }
  return result;
}

console.log(multiplyArrays([1, 2, 3], [4, 5, 6])); // [4, 10, 18]
console.log(multiplyArrays([1, 2], [4, 5, 6])); // null
// This function first checks whether the two input arrays are the same length. If they're not, it can't multiply them together element-wise and the function returns null. Otherwise, it creates an empty array called result and loops through the arrays, multiplying the elements at each index together and pushing the product into result. Finally, it returns result, which is an array of the products of the corresponding elements in arr1 and arr2.

// Binary search
// Binary search is a way of finding a specific value in a sorted array by repeatedly dividing the array in half until the value is found or determined to not be present. 
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 3, 4, 7, 8, 10], 7)); // 3
console.log(binarySearch([1, 3, 4, 7, 8, 10], 5)); // -1
// This function takes an array arr and a target value target as input. It initializes two pointers, left and right, to the beginning and end of arr, respectively. It then enters a loop that continues as long as left is less than or equal to right. In each iteration of the loop, it calculates the index of the middle element of the current subarray using integer division. If the middle element is equal to target, the function returns its index. If the middle element is less than target, the function updates left to be the index after the middle element, effectively discarding the left half of the current subarray. If the middle element is greater than target, the function updates right to be the index before the middle element, effectively discarding the right half of the current subarray. If the loop completes without finding target, the function returns -1.


// Find the largest number in an array:

function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([5, 2, 8, 3])); // 8
console.log(findLargest([-3, -10, -8, -2])); // -2
// This function takes an array arr as input, initializes a variable largest to be the first element of the array, and then loops through the remaining elements of the array, updating largest if it encounters a larger element. Finally, the function returns largest.

// Merge two sorted arrays:
function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([5, 7, 8], [4, 6, 9, 10])); // [4, 5, 6, 7, 8, 9, 10]
// This function takes two sorted arrays arr1 and arr2 as input, initializes two pointers i and j to the beginning of each array, and then merges the two arrays into a new array merged. It compares the elements at the current positions of i and j, adds the smaller element to merged, and advances the corresponding pointer. When one of the pointers reaches the end of its array, the function appends the remaining elements of the other array to merged. Finally, the function returns merged.

// Flattening an array:
function flattenArray(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(flattenArray(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, 2, [3, [4, 5], 6]])); // [1, 2, 3, 4, 5, 6]
// This function takes an array arr as input and initializes an empty array flattened. It loops through each element of arr, recursively calling itself on any nested arrays and concatenating the results to flattened. If an element is not an array, the function simply appends it to `flatt
