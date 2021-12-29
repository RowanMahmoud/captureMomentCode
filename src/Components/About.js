import React, { Component } from "react";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
export default class LogIn extends Component {
    render() {
        return (
            <form className="login">
                <h1>LOGIN</h1>

              
                <div className="form-group">
                    <label className="in">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="in">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

<br></br>
                <button type="submit" className="btn btn-primary btn-block">LOGIN</button>
                <div className="About">
                <p className="forgot-password text-right">
                    You don't have account?  <Link to={"/SignUp"}>SignUp</Link>
                </p>
                </div>

            </form>
        );
    }
}