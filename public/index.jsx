import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link}  from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import AddNew from './AddNew';
import ViewSubject from './ViewSubject';

function Home(){
    return(
        <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add New</Link></li>
                <li><Link to="/showsubs">View Subjects</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={App}/>
            <Route path="/add" component={AddNew}/>
            <Route path="/showsubs" component={ViewSubject}/>
        </div>
    </Router>
    )
}

render(<Home/>, document.getElementById('root'));
