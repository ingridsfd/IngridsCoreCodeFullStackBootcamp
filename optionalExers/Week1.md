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
code block
```

# Week challenges (Thursday) 💻

## Exercise
