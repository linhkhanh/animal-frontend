import React, { Component } from 'react';
import Row from './Row';
import { array, func } from 'prop-types';
class Table extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Species</th>
                        <th scope="col">Breed</th>
                        <th scope="col">Image</th>
                        <th scope="col">Age</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Adopted</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.animal.map((item, index) => {
                        return (
                            <Row index={index} animal={item}
                                toggleEdit={this.props.toggleEdit}
                                name={this.props.name}
                                species={this.props.species} breed={this.props.breed}
                                sex={this.props.sex} age={this.props.age} image={this.props.image}
                                adopted={this.props.adopted}
                                handleChange={this.props.handleChange}
                                toggleCheck={this.props.toggleCheck}
                                save={this.props.save}
                            />
                        )
                    })}
                </tbody>
            </table>
        )
    }
}
Table.propTypes = {
    animal: array,
    toggleEdit: func
}
export default Table