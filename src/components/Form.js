import React from 'react';
import { string, number, func, bool } from 'prop-types';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="enter name of animal" value={this.props.name} onChange={this.props.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="species">Species</label>
                    <input type="text" className="form-control" id="species" placeholder="enter species" value={this.props.species} onChange={this.props.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="breed">Breed</label>
                    <input type="text" className="form-control" id="breed" placeholder="enter breed" value={this.props.breed} onChange={this.props.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="sex">Sex</label>
                    <input type="text" className="form-control" id="sex" placeholder="enter sex" value={this.props.sex} onChange={this.props.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" className="form-control" id="age" placeholder="enter age" value={this.props.age} onChange={this.props.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="text" className="form-control" id="image" placeholder="enter image url" value={this.props.image} onChange={this.props.handleChange} />
                </div>

                <div class="form-group form-check">
                    <input type="checkbox" className="form-check-input" checked={this.props.adopted} onChange={this.props.toggleCheck} />
                    <label className="form-check-label" htmlFor="adopted">Adopted</label>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        )
    }
}

Form.propTypes = {
    handleSubmit: func,
    handleChange: func,
    toggleCheck: func,
    name: string,
    species: string,
    breed: string,
    age: number,
    sex: string,
    image: string,
    adopted: bool
};

export default Form