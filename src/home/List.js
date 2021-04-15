import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route,Switch, Link, useRouteMatch, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Container } from '@material-ui/core';
import { Row,Col } from 'react-bootstrap';

function CompList(props) {
    const components = ['React', 'ExtJs', 'Angular', 'Javascript'];
    
    return(
        <Container>
            <Row>
                <Col sm={6}>
                    <List component="nav" aria-label="Device settings">
                        {components.map((option, index) => (
                            <ListItem
                            button
                            key = {option}
                            >
                            <ListItemText><Link to={`/home/${option}`}>{option}</Link></ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Col>
                <Col sm={6}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}


export default CompList;