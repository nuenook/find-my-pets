import React, { Component } from 'react';

class AddPet extends Component {
    render() {
        return (

                <div className="row">
                    <div className="col  s4"></div>
                    <div className="input-field col s4">
                        <input type="text" id="petName"/>
                        <label htmlFor="petName">Pet Name</label>
                    </div>
                    <div className="col  s4"></div>
                </div>
        );
    }
}

export default AddPet;
