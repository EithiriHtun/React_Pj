// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// class App extends React.Component {
//  render() {
//  return (
//  <div>
//  <h1>Hello React</h1>
//  <ul>
//  <li>Item One</li>
//  <li>Item Two</li>
//  </ul>
//  </div>
//  )
//  }
// }
// export default App;
// import React from 'react';
// class Item extends React.Component {
//  render() {
//  return <li>Content</li>;
//  }
// }
// class App extends React.Component {
//  render() {
//  return (
//  <div>
//  <h1>Hello React</h1>
//  <ul>
//  <Item />
//  <Item />
//  </ul>
//  </div>
//  )
//  }
// }
// export default App;

// import React from 'react';
// class Item extends React.Component {
//  render() {
//  return (
//  <li>
//  {this.props.name},
//  ${this.props.price}
//  </li>
//  );
//  }
// }
// class App extends React.Component {
//  render() {
//  return (
//  <div>
//  <h1>Hello React</h1>
//  <ul>
//  <Item name="Apple" price="0.99" />
//  <Item name="Orange" price="0.89" />
//  </ul>
//  </div>
//  )
//  }
// }
// export default App;

import React, { createRef } from 'react';
import { connect } from 'react-redux';
const Item = ({ name, price }) => (
    <li>{name}, ${price}</li>
)
const App = props => {
    let nameRef = createRef();
    let priceRef = createRef();

    const add = () => {
        props.add(
            props.items.length + 1,
            nameRef.current.value,
            priceRef.current.value
        );
    }
    return (
        <div>
            <ul>
                {props.items.map(i => (
                    <Item
                        key={i.id}
                        name={i.name}
                        price={i.price} />
                ))}
            </ul>
            <input type="text" ref={nameRef} /><br />
            <input type="text" ref={priceRef} /><br />
            <button onClick={add}>Add</button>
        </div>
    )
}
const stateToProps = state => {
    return {
        items: state
    };
}
const dispatchToProps = dispatch => {
    return {
        add: (id, name, price) => {
            dispatch({
                type: 'ADD',
                item: { id, name, price }
            });
        }
    }
}

// function add(a) {
//     return function (b) {
//         return a + b;
//     }
// }

// const addTwo = add(2);
// addTwo(3); 

const ReduxApp = connect(stateToProps, dispatchToProps)(App);
export default ReduxApp;

