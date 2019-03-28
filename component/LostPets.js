import React, { Component } from 'react';
import PetCard from './lostpets/PetCard';

let items = [1,2,3,4,5,6,7]
class LostPets extends Component {
    render() {
        return (
            <div>
            <h3 className="header center orange-text">Lost Pets</h3>
            <div className="row">
            { items.map(m => (
                <div className="col s6 m4 l3" key={m}>
                    <PetCard />
                </div>
            ))}
            </div>
            
        </div>
        );
    }
}

export default LostPets;
