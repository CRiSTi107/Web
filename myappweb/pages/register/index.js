import { Fragment } from "react";
import React, { Component } from 'react';
import Link from "next/link";

class Register extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        rePassword: '',
        firstname: '',
        lastname: '',
        error: ''
    };

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    };

    handleRegister = () => {

    }

    render() {

        const { email, username, password, rePassword, firstname, lastname, error } = this.state;

        return (
            <Fragment>
                <p>Email</p>
                <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={this.handleChange}
                />

                <p>Username</p>
                <input
                    name="username"
                    type="text"
                    autoComplete="given-username"
                    value={username}
                    onChange={this.handleChange}
                />

                <p>Password</p>
                <input
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={this.handleChange}
                />

                <p>Retype Password</p>
                <input
                    name="rePassword"
                    type="password"
                    autoComplete="new-password"
                    value={rePassword}
                    onChange={this.handleChange}
                />

                <p>Firstname</p>
                <input
                    name="firstname"
                    type="text"
                    autoComplete="given-name"
                    value={firstname}
                    onChange={this.handleChange}
                />

                <p>Lastname</p>
                <input
                    name="lastname"
                    type="text"
                    autoComplete="family-name"
                    value={lastname}
                    onChange={this.handleChange}
                />

                <button onClick={this.handleRegister}>Register</button>
                <p>{error}</p>
                <p>Have an account? <Link href={'/login'}>Login</Link></p>
            </Fragment>
        );
    }
}

export default Register;