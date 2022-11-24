/*
Given a string, write a function that returns the string with a question mark ("?") 
appends to the end, unless the original string ends with a question mark, in which case, 
returns the original string.
For example (Input --> Output)
*/

function ensureQuestion(s) {
  // 1. Define the let str = 'word'
  let str = "This is my text?"
  // 2. return the condition
    return str.endsWith("?")
}