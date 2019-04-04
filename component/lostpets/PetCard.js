import React from 'react';

const PetCard = ({pet, deletePet}) => {
    // console.log(props)
    return (
        <div className="card">
            <div className="card-image">
                <img src="static/dog-ex.jpg" />
            <span className="card-title">{pet.petName}</span>
            </div>
            <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
                <a href="#">Detail</a>
                <a href="##" onClick={() => {deletePet(pet.id)}}> Remove </a>                
            </div>
        </div>
    );
}

export default PetCard;
