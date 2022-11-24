# Week challenges (Tuesday) 💻

## Exercise Ensure Question

```JavaScript
//My way to explain it:
//1. Define the variables (optional)
//2. If s has ? return normal/original string
//3. If s has no '?' return with concat + '?'

function ensureQuestion(s) {
  if (s.endsWith('?')) {
    return s
  } else {
    return s + '?';
  }
}
```

## Exercise Reversed Words

```JavaScript
//Explanation:
//Because we need to use the .reverse() method
//1. We have to turn the string to array first
//2. Then, we reverse, then we want the result in string
//3. and because there's a ',' still remaining we can use the .join() method with (' '); to make the separation between the words
//Note: .join() passes from array to string, and in the end we want the data to keep string
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}
```

# Week challenges (Wednesday) 💻

## Exercise Smallest Integer In Array

```JavaScript
//1. We have an array of integers which is expressed in args
//2. We must find the smallest number with Math.min()
//3. Google how we express smallest number in the array
//3.1 The expression is Math.min(...args)
//4. return the condition

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
```

# Week challenges (Thursday) 💻

## Exercise Odd or Even (num impar o par)

```JavaScript
//0. Look for the .reduce() apply it in its arrow function
//1. If the arr is odd return string "odd" arr % 2 === 0
//2. If the arr is even return string "even"
//3. If the input array is empty, consider it as [0]
//4. Try it

//example odd
let arr = [0,1,4];
//example even
let arr2 = [0,1,1];
//function
function oddOrEven(array) {
   const sumArr = array.reduce((acc, curr) => (acc + curr), 0);
   return sum % 2 === 0 ? 'Even' : 'Odd';
}
console.log(oddOrEven(array));

```

Version 2

```JavaScript
let array = [0, 1, 1];

function oddOrEven(array) {
  const sum = array.reduce((acc, val) => acc + val, 0);
  if (sum % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}

console.log(oddOrEven(array));
```
