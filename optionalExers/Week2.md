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

Version 2 with Kata:

```JavaScript
const React = require("react");

export class Counter extends React.Component {
  constructor(props) {
    // Your state
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.state = {value: 0}
  }

  // Your event handlers
  handleIncrement(event) {
    this.setState({value: state.counter + 1})
  }

  handleDecrement(event) {
    this.setState({value: state.counter - 1})
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
          <button type="button" onClick={this.handleDecrement}>
            Decrement
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Increment
          </button>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter/>);
```

# Week challenges (Thursday) 💻

## Exercise React Santa Wish List

Version 1:

```JavaScript
const React = require("react");

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', wish: '', priority: 1 };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleWishChange = this.handleWishChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleWishChange(e) {
    this.setState({wish: e.target.value});
  }


  handlePriorityChange(e) {
    this.setState({priority: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.send(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       Name: <input type="text" id="name" value={this.state.name} onChange={this.handleNameChange}/>
       Wish: <textarea rows="10" cols="10" id="wish" value={this.state.wish} onChange={this.handleWishChange} />
       <br />
       Wish Priority:
       <select value={this.state.priority} id="priority" onChange={this.handlePriorityChange}>
         <option value={1}>1</option>
         <option value={2}>2</option>
         <option value={3}>3</option>
         <option value={4}>4</option>
         <option value={5}>5</option>
      </select>
      </form>
    );
  }
};
```

Version 2:

```JavaScript
import React from "react";
import "./styles.css";

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      wish: "",
      priority: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.send(this.state);
  }

  render() {
    return (
      <form>
        <div>
          <label>Name:</label>
          <input
            id="name"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <label>Wish:</label>
          <textarea
            id="wish"
            name="wish"
            value={this.state.wish}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <label>Priority:</label>
          <select
            name="priority"
            value={this.state.priority}
            onChange={(e) => this.handleChange(e)}
            id="priority"
          >
            {[1, 2, 3, 4, 5].map((val) => (
              <option value={val} id={val} key={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            onClick={() => this.handleSubmit}
          />
        </div>
      </form>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <WishlistForm send={(form) => console.log(form)} />
    </div>
  );
}
```
