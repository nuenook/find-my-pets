import {action, observable} from 'mobx'

const petsExample = [
    { id:1, petName: "Liiy"},
    { id:2, petName: "Moxy"},
    { id:3, petName: "Nuky"},
    { id:4, petName: "Suhy"},
    { id:5, petName: "xyxx"}
  ]

class petStore {

    @observable pets = []
    
    constructor(isServer, initialData = {}) {
        this.pets = initialData.pets ? initialData.pets : petsExample
    }

    @action fetchPets = () => {

    }

    @action addPet = (newPet) => {
        this.pets.push(newPet)
    }

    @action deletePet = (petId) => {
        const thisPet = this.pets.find(p => p.id === petId)        
        this.pets.remove(thisPet)
    }

}

export default petStore