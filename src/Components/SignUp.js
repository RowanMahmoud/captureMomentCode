import React, { Component } from "react";
export default class SignUp extends Component {
    render() {
        return (
            <form className="login">
                <h1>SignUp</h1>
                <div className="form-group">
                    <label className="in">First name</label>
                    <input  type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label className="in">Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

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
                <p className="forgot-password text-right">
                    Already registered <a href="About">Log in?</a>
                </p>
            </form>
        );
    }
}