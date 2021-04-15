import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Switch, Redirect, useParams } from 'react-router-dom';

function Topic() {
    let { topicId } = useParams();

    console.log('topicId', topicId);

    return (
        <div>
        {/* <h3>{topicId}</h3> */}
            <h1>component</h1>
        </div>
    );
}

export default Topic;