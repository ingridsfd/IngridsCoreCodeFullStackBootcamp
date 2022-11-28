# Week challenges (Monday) 💻

## Exercise isPalindrome?

```JavaScript
function isPalindrome(line) {
  //1. Convert to string if there's a number
  let fromNum = line.toString();
  //2. Use replace because we have to make sure it reads all characters to then reverse
  let re = /[\W_]/g;
  //3. Make sure it will read the entire string
  let lowRegStr = fromNum.toLowerCase().replace(re, '');
  //4. Now we can split, reverse and join
  let reverseStr = lowRegStr.split('').reverse().join('');
  //5. ask if it'll be equal: reversed to non-reversed
  return reverseStr === lowRegStr;
}
```

# Week challenges (Tuesday) 💻

## Exercise Well of Ideas (easy version)

```JavaScript
//1. Check the array if it's a good idea, return 'good'
//2. If it's a bad idea, return 'bad'
//3. One or 2 good ideas, return 'Publish!'
//4. if more than 2, return 'I smell a series!'
//5. if there are no good ideas, return 'Fail!'
//6. Look forEach iteration and apply it
let x = ['good','bad','bad','bad','good'];

function well(x, v){
  let count = 0;
  x.forEach((v)=>(v === 'good' && count++));
  return count == 0 ? 'Fail!' : count < 3 ? 'Publish!' : 'I smell a series!';

}
```

# Week challenges (Wednesday) 💻

## Exercise

```JavaScript
Here goes code
```

# Week challenges (Thursday) 💻

## Exercise

```JavaScript
Here goes code
```
