import React, { Component } from 'react';

class SignUp extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8">
                        <h2 className="header center orange-text">Register</h2>
                        <form action="" className="center">                     
                                <div className="input-field">
                                    <input type="email" id="newEmail" />
                                    <label htmlFor="newEmail"> Email </label>
                                </div>
                                <div className="input-field ">
                                    <input type="password" id="newPassword" />
                                    <label htmlFor="newPassword">Password</label>
                                </div>
                                <div className="input-field ">
                                    <input type="password" id="confirmPassword" />
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                </div>
                            <button className="btn waves-effect light-blue left"> Submit </button>
                        </form>
                    </div>
                    <div className="col s2"></div>
                </div>
            </div>
        );
    }
}

export default SignUp;
