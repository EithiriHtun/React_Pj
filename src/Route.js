import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import './Mystyle.css';
import React from 'react';

const App = props => {
    return (
        <Router>
            <div className="toolbar">
                <ul>
                    <li><Link to="/male">Male</Link></li>
                    <li><Link to="/female">Female</Link></li>
                </ul>
                <div style={{ background: 'cyan', padding: 20 }}>
                    <Switch>
                        <Route path="/male"><Male /></Route>
                        <Route path="/female"><Female /></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

const User = props => {
    const { name } = useParams();
    return (
    <h1>Profile - {name}</h1>
    )
   }
   const App = props => {
    return (
    <Router>
    <div>
    <ul>
    <li><Link to="/user/Alice">Alice</Link></li>
    <li><Link to="/user/Bob">Bob</Link></li>
    </ul>
    <div style={{background: 'cyan', padding: 20}}>
    <Switch>
    <Route path="/user/:name"><User /></Route>
    </Switch>
    </div>
    </div>
    </Router>
    );
   }
   