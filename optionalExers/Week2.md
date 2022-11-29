# Week challenges (Monday) 💻

### Color palette for highlights:

- <mark style="background-color: #C23B23">Red</mark> - #C23B23
- <mark style="background-color: #F39A27">Orange</mark> - #F39A27 <mark style="background-color: #F39A27">for important exercises to do</mark>
- <mark style="background-color: #EADA52">Yellow</mark> - #EADA52
- <mark style="background-color: #03C03C">Green</mark> - #03C03C
- <mark style="background-color: #579ABE">Blue</mark> - #579ABE
- <mark style="background-color: #976ED7">Purple</mark> - #976ED7

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

## Notes React Code Session Saturday 26, Nov:

Steps to create / apply useState():

```JavaScript
//1. Crear una variable
const [name, setName] = useSate('');
//2. Crear la función que se insterta en el <input value> del formulario
const handleName = (e) => {
  setName(e.target.value);
};
//3. Este es el ejemplo de la inserción
return (
  <div>
    <form>
      <p>name</p>
      <input value={name}> name='name' onChange={handleName}  placeholder?'name...'/>
      ...
    </form>
  </div>
)

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

## <mark style="background-color: #F39A27">Exercise React Manage Events</mark>

```JavaScript
import React, {useState} from 'react';

function App() {
  const [num, setNum] = useState(0);
  const suma = () => {
    setNum (num+1);
  }
  const resta = () => {
    setNum (num-1);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={suma}>Increment</button>
      <button on Click={resta}>Decrement</button>
    </div>
  );
}

export default App;
```

# Week challenges (Thursday) 💻

## Exercise

```JavaScript
Here goes code
```
