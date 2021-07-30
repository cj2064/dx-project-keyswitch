import React, { Component } from 'react'
import '../styles/Account.css';
import formLogo from '../gat_keyswitch.png';

export class Account extends Component {
    render() {
        return (
            <div className="Account">
                <div className="container col-sm-3">
                <img className="form-logo" src={formLogo} alt="formlogo" />
                    <form className="Account-form">
                        <div className="mb-3">
                            <label for="firstName" className="form-label">First Name</label>
                            <input type="firstName" className="form-control" id="firstName" />
                        </div>
                        <div className="mb-3">
                            <label for="lastName" className="form-label">Last Name</label>
                            <input type="lastName" className="form-control" id="lastName" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">I agree to the <a href="#">Terms and Conditions</a></label>
                        </div>
                        <button type="submit" className="btn btn-md btn-primary">Sign Up !</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Account
