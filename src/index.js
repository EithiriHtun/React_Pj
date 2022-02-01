// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics giendpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

//Default App

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// const store = createStore((state = [], action) => {
//  if(action.type === "ADD") return [ ...state, action.item ];
//  return state;
// });
// ReactDOM.render(
//  <React.StrictMode>
//  <Provider store={store}>
//  <App />
//  </Provider>
//  </React.StrictMode>,
//  document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();
// reportWebVitals();

//Redux test

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './Mystyle.css';
import React from 'react';

const users = [
  { id: 1, name: 'Alice', gender: 'f' },
  { id: 2, name: 'Bob', gender: 'm' },
  { id: 3, name: 'Tom', gender: 'm' },
  { id: 4, name: 'Mary', gender: 'f' },
 ];

 const Male = props => {
  return (
  <ul>
  {users.filter(u => u.gender === 'm')
  .map(u => <li key={u.id}>{u.name}</li>)}
  </ul>
  );
  } 

  const Female = props => {
    return (
    <ul>
    {users.filter(u => u.gender === 'f')
    .map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
    );
   }
   

const App = props => {
  return (
      <Router>
          <div >
              <ul>
                  <li><Link to="/male">Male</Link></li>
                  <li><Link to="/female">Female</Link></li>
              </ul>
              <div className="toolbar">
                  <Routes>
                      <Route path="/male"><Male /></Route>
                      <Route path="/female"><Female /></Route>
                      <Route path='/male' element={<Male/>} />
                      <Route path="/male" exact><Male /></Route>
                  </Routes>
              </div>
          </div>
      </Router>
  );
}

//Static Route

// const User = props => {
//   const { name } = useParams();
//   return (
//   <h1>Profile - {name}</h1>
//   )
//  }
//  const App1 = props => {
//   return (
//   <Router>
//   <div>
//   <ul>
//   <li><Link to="/user/Alice">Alice</Link></li>
//   <li><Link to="/user/Bob">Bob</Link></li>
//   </ul>
//   <div style={{background: 'cyan', padding: 20}}>
//   <Routes>
//   <Route path="/user/:name"><User /></Route>
//   </Routes>
//   </div>
//   </div>
//   </Router>
//   );
//  }
 
//Dynamic Route

export default App;