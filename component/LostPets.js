import React, { Component } from 'react';
import PetCard from './lostpets/PetCard';
import { inject, observer } from 'mobx-react';

let items = [1,2,3,4,5,6,7]


@inject('store')
@observer
class LostPets extends Component {

    componentDidMount() {
        
    }

    deletePet = (id) => {
        console.log(id)
        this.props.store.pet.deletePet(id)
    }

    render() {
        
        const {pets} = this.props.store.pet
        console.log(pets)
        return (
            <div>
            <h3 className="header center orange-text">Lost Pets</h3>
            <div className="row">
            { pets.map(pet => (
                <div className="col s6 m4 l3" key={pet.id}>
                    <PetCard pet={pet} deletePet={this.deletePet} />
                </div>
            ))}
            </div>
            
        </div>
        );
    }
}

export default LostPets;
