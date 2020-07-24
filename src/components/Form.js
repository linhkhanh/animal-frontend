import React from 'react';
import { string, number, func, bool } from 'prop-types';

class Form extends React.Component {
    render() {
        return (
            <div className='form'>
                <form onSubmit={this.props.handleSubmit}>
                    <h2 className="text-center">ADD NEW</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" placeholder="enter name of animal" value={this.props.name} onChange={this.props.handleChange} required/>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="species" placeholder="enter species" value={this.props.species} onChange={this.props.handleChange} required/>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="breed" placeholder="enter breed" value={this.props.breed} onChange={this.props.handleChange} required/>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="sex" placeholder="enter sex" value={this.props.sex} onChange={this.props.handleChange} required/>
                    </div>

                    <div className="form-group">
                        <input type="number" className="form-control" id="age" placeholder="enter age" value={this.props.age} onChange={this.props.handleChange} required/>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="image" placeholder="enter image url" value={this.props.image} onChange={this.props.handleChange} required/>
                    </div>

                    <div class="form-group form-check">
                        <input type="checkbox" className="form-check-input" checked={this.props.adopted} onChange={this.props.toggleCheck} />
                        <label className="form-check-label" htmlFor="adopted">Adopted</label>
                    </div>
                    <input type="submit" className="btn btn-success form-control" value="ADD"/>
                </form>

                <div className="title">
                    <h2>WILDLIFE AT RISK</h2>
                </div>
            </div>

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