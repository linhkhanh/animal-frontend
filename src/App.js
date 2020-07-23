import React, { Component } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
import animalService from './services/animalService';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            species: '',
            breed: '',
            sex: '',
            age: 0,
            image: '',
            adopted: false,
            animal: []
        }
    }

    // toggle check
    toggleCheck = () => {
        this.setState({
            adopted: !this.state.adopted
        })
    }
    // handle Change
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    // handle submit
    handleSubmit = async (event) => {
        event.preventDefault();
        const newOne = {
            name: this.state.name,
            species: this.state.species,
            breed: this.state.breed,
            sex: this.state.sex,
            age: this.state.age,
            image: this.state.image,
            adopted: this.state.adopted,
            isEditing: false
        };
        const newData = await animalService.create(newOne);
        console.log(newData);
        this.setState({
            name: '',
            species: '',
            breed: '',
            sex: '',
            age: 0,
            image: '',
            adopted: false,
            animal: [newData, ...this.state.animal]
        });
    }

    toggleEdit = (event) => {
        const index = event.target.id;
        const animal = this.state.animal;
        this.setState({
            name: animal[index].name,
            species: animal[index].species,
            breed: animal[index].breed,
            sex: animal[index].sex,
            age: animal[index].age,
            image: animal[index].image,
            adopted: animal[index].adopted,
        })
        animal[index].isEditing = true;
        this.setState({
            animal: animal
        });
        console.log(animal)
    }
    //  Fetch data
    async fetchAnimal() {
        const animal = await animalService.getAll();
        this.setState({ animal: animal });
        console.log(animal);
    }
    // Show data
    componentDidMount() {
        this.fetchAnimal()
    }

    save = async (event) => {
        event.preventDefault();
        const id = event.target.id;
        const animal = this.state.animal;
    
        const index = animal.findIndex(item => item._id === id);
        const updatedData = {
            name: this.state.name,
            species: this.state.species,
            breed: this.state.breed,
            sex: this.state.sex,
            age: this.state.age,
            image: this.state.image,
            adopted: this.state.adopted,
            isEditing: false
        }

        animal[index] = updatedData;
        this.setState({
            name: '',
            species: '',
            breed: '',
            sex: '',
            age: 0,
            image: '',
            adopted: false,
            animal: animal
        });
        await animalService.updateCompletionStatus(id, updatedData);
    }
    render() {
        const { name, species, breed, sex, age, image, adopted } = this.state;
        return (
            <React.Fragment>
                <Header />
                <Form name={name}
                    species={species} breed={breed}
                    sex={sex} age={age} image={image}
                    adopted={adopted}
                    toggleCheck={this.toggleCheck}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />

                <Table animal={this.state.animal}
                    toggleEdit={this.toggleEdit}
                    name={name}
                    species={species} breed={breed}
                    sex={sex} age={age} image={image}
                    adopted={adopted}
                    handleChange={this.handleChange}
                    toggleCheck={this.toggleCheck}
                    save={this.save}
                />
            </React.Fragment>
        )
    }
}

export default App