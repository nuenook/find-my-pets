import React from 'react';

const PetCard = () => {
    return (
        <div className="card">
            <div className="card-image">
                <img src="static/dog-ex.jpg" />
            <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
                <a href="#">Detail</a>
            </div>
        </div>
    );
}

export default PetCard;
