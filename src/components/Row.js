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
                        <td><button id={this.props.index} onClick={this.props.toggleEdit} className="btn btn-light">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                                <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                            </svg>
                        </button>
                            <button a-key={this.props.animal._id} onClick={this.props.delete} className="btn btn-light">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </button></td>
                    </tr> :
                    <tr>
                        <th scope="row">{this.props.index}</th>
                        <td><input value={this.props.name} onChange={this.props.handleChange} id='name' /></td>
                        <td><input value={this.props.species} onChange={this.props.handleChange} id='species' /></td>
                        <td><input value={this.props.breed} onChange={this.props.handleChange} id='breed' /></td>
                        <td><input value={this.props.image} onChange={this.props.handleChange} id='image' /></td>
                        <td><input value={this.props.age} onChange={this.props.handleChange} id='age' /></td>
                        <td><input value={this.props.sex} onChange={this.props.handleChange} id='sex' /></td>
                        <td><input type="checkbox" className="form-check-input" checked={this.props.adopted} onChange={this.props.toggleCheck} id='adopted' />
                            <label className="form-check-label" htmlFor="adopted">Adopted</label></td>
                        <td><button onClick={this.props.save} id={this.props.animal._id} key={this.props.index} className="btn btn-success">Save </button>
                        Delete
                        </td>
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