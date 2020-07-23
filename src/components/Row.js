import React, { Component } from 'react';
import { number, object, func } from 'prop-types';

class Row extends Component {
    render() {
        return (
            <React.Fragment>
                {!this.props.animal.isEditing ?
                    < tr >
                        <th scope="row">{this.props.index}</th>
                        <td>{this.props.animal.name}</td>
                        <td>{this.props.animal.species}</td>
                        <td>{this.props.animal.breed}</td>
                        <td><img src={this.props.animal.image} alt="this is an animal" /></td>
                        <td>{this.props.animal.age}</td>
                        <td>{this.props.animal.sex}</td>
                        <td>{this.props.animal.adopted ? "True" : "False"}</td>
                        <td><button id={this.props.index} onClick={this.props.toggleEdit}>Edit</button> <button a-key={this.props.animal._id} onClick={this.props.delete}>Delete</button></td>
                    </tr> :
                    <tr>
                        <th scope="row">{this.props.index}</th>
                        <td><input value={this.props.name} onChange={this.props.handleChange} id='name'/></td>
                        <td><input value={this.props.species} onChange={this.props.handleChange} id='species'/></td>
                        <td><input value={this.props.breed} onChange={this.props.handleChange} id='breed'/></td>
                        <td><input value={this.props.image} onChange={this.props.handleChange} id='image'/></td>
                        <td><input value={this.props.age} onChange={this.props.handleChange} id='age'/></td>
                        <td><input value={this.props.sex} onChange={this.props.handleChange} id='sex'/></td>
                        <td><input type="checkbox" className="form-check-input" checked={this.props.adopted} onChange={this.props.toggleCheck} id='adopted'/>
                            <label className="form-check-label" htmlFor="adopted">Adopted</label></td>
                        <td><button onClick={this.props.save} id={this.props.animal._id} key={this.props.index}>Save </button>Delete</td>
                    </tr>
                }
            </React.Fragment>
        )
    }
}

Row.propTypes = {
    index: number,
    animal: object,
    toggleCheck: func,
    toggleEdit: func
}
export default Row