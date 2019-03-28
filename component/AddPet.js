import React, { Component } from 'react';

if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
    require('materialize-css');
}

class AddPet extends Component {

    componentDidMount = () => {
        $('select').formSelect();    
    }

    render() {
        return (
            <form action="">
                <div className="row">
                    <div className="col s3"></div>
                    <div className="col s6">
                        <div className="input-field">
                            <input type="text" id="petName"/>
                            <label htmlFor="petName">Pet Name</label>
                        </div>

                        <div className="input-field">
                            <select name="" id="pets-type">
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="mouse">Mouse</option>
                            </select>
                            <label>Pet Type</label>
                        </div>

                        {/* <div class="input-field">
                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1">Textarea</label>
                        </div> */}
                    </div>                    
                    <div className="col s3"></div>
                </div>
            </form>
        );
    }
}

export default AddPet;
