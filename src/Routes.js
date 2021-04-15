import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Switch, Redirect, useParams } from 'react-router-dom';
import Login from './Login';
import Home from './home/Home';
import Topic from './components/Topic';

function Routes(){
    return(
        <Switch>
            <Route exact path="/home"><Home/></Route>
            {/* <Redirect from="/" to="/home" /> */}
            <Route path = "/login"><Login/></Route>
            {/* <Route path="/home/React"><Topic /></Route> 
            <Route path="/home/ExtJs"><Topic /></Route> 
            <Route path="/home/Angular"><Topic /></Route> 
            <Route path="/home/Javascript"><Topic /></Route>  */}
        </Switch>
    )
}

export default Routes;