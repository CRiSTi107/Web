import { Fragment } from "react";
import React, { Component } from 'react';
import Link from "next/link";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

import styles from '../../styles/login.module.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    };

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    };

    handleLogin = async () => {

        const { email, password } = this.state;

        const request = {
            email,
            password
        };

        const rawResponse = await fetch("http://172.18.0.11:5000/user/authenticate", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        });
        const response = await rawResponse.json();

        if (rawResponse.status === 200 && response) {
            sessionStorage.setItem("token", response.token);
            console.log(response);
            this.setState({ error: "" });
        } else if (response) {
            this.setState({ error: response.message });
        }
    }

    render() {

        const { email, password, error } = this.state;

        return (
            <Fragment>
                <div className={styles.parent}>
                    <div className={styles.child}>
                        <TextField
                            className={styles.item}
                            error={error === "" ? false : true}
                            label="Email"
                            variant="outlined"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className={styles.child}>
                        <TextField
                            className={styles.item}
                            error={error === "" ? false : true}
                            helperText={error}
                            label="Password"
                            variant="outlined"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className={styles.child}>
                        <Button
                            className={styles.item}
                            variant="contained"
                            color="primary"
                            onClick={this.handleLogin}
                        >
                            Login
                        </Button>
                    </div>

                    <div className={styles.child}>
                        <Typography >
                            Not registered? <Link href={'/register'}>Create an account</Link>
                        </Typography>
                    </div>

                    <div className={styles.child}>
                        <Typography >
                            Forgot password? <Link href={'/forgot-password'}>Reset</Link>
                        </Typography>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Login;