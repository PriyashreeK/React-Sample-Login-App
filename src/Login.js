import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

function Login(){
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const onChangeEmail = (e) =>{
        let val = e.target.value;
        setEmail(val);
    }

    const onChangePassword = (e) =>{
        let val = e.target.value;
        setPassword(val);
    }

    function handleSubmit(e){
        alert('You have been logged in!!Welcome '+ email);
        setEmail("");
        setPassword("");
        e.preventDefault();
        history.push('/');
    }

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    return(
        <div className="Login">
            <center>
                <form>
                    <div className="innerDiv">
                        <div className ="emailDiv">
                            <TextField required id="standard-required" label="Email" defaultValue="" type="email" value={email} onChange={onChangeEmail}/>
                        </div>
                        <div className ="pwdDiv">
                            <TextField required
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={password} 
                                onChange={onChangePassword}
                            />
                        </div>
                        <br/>
                        <Button variant="contained" color="primary" disabled={!validateForm()} onClick={handleSubmit}>
                            Login
                        </Button>
                    </div>
                </form>
            </center>
        </div>
    )
}

export default Login;