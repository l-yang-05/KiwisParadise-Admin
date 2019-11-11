import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import RegistrationModal from './RegistrationModal';
import { USERS_API_URL } from '../constants';

class DataTable extends Component {
    deleteItem = id => {
        fetch(`${USERS_API_URL}/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        }) // Use DELETE method of API
            .then(res => {
                this.props.deleteItemFromState(id);
                console.log(res)
            })
            .catch(err => console.log(err));
    }
    render() {
        const items = this.props.items;
        return <Table striped>
            {/* Create table for products */}
            <thead className="thead-dark">
                <tr>
                    <th>Id</th>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th style={{ textAlign: "center" }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* Check if there are any returned products */}
                {!items || items.length <= 0 ?
                    <tr>
                        <td colSpan="6" align="center"><b>No Products yet</b></td>
                    </tr>
                    : items.map(item => (
                        <tr key={item.id}>
                            <th scope="row">
                                {item.id}
                            </th>
                            <td>
                                {item.product_name}
                            </td>
                            <td>
                                {item.product_desc}
                            </td>
                            <td>
                                {item.product_category}
                            </td>
                            <td>
                                {item.image}
                            </td>
                            <td align="center">
                                <div>
                                    <RegistrationModal
                                        isNew={false}
                                        user={item}
                                        updateUserIntoState={this.props.updateState} />
                                    &nbsp;&nbsp;&nbsp;
                  <Button color="danger" onClick={() => this.deleteItem(item.id)}>Delete</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>;
    }
}
export default DataTable;