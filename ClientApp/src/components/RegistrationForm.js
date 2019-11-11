import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { USERS_API_URL } from '../constants';

class RegistrationForm extends React.Component {
    state = {
        id: 0,
        product_name: '',
        product_desc: '',
        product_category: '',
        image: ''
    }
    //If there is a user set state
    componentDidMount() {
        if (this.props.user) {
            const { id, product_name, product_desc, product_category, image } = this.props.user
            this.setState({ id, product_name, product_desc, product_category, image });
        }
    }

    // Set state on form changes
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // Create a new user with post method
    submitNew = e => {
        e.preventDefault();
        fetch(`${USERS_API_URL}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'origin',
                'Access-Control-Allow-Credentials': 'true'
            },
            body: JSON.stringify({
                product_name: this.state.product_name,
                product_desc: this.state.product_desc,
                product_category: this.state.product_category,
                image: this.state.image
            })
        })
            .then(res => res.json())
            .then(user => {
                this.props.addUserToState(user);
                this.props.toggle();
            })
            .catch(err => console.log(err));
    }

    // Submit an edit with put
    submitEdit = e => {
        e.preventDefault();
        fetch(`${USERS_API_URL}/${this.state.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                product_name: this.state.product_name,
                product_desc: this.state.product_desc,
                product_category: this.state.product_category,
                image: this.state.image
            })
        })
            .then(() => {
                this.props.toggle();
                this.props.updateUserIntoState(this.state.id);
            })
            .catch(err => console.log(err));
    }

    // Render the forms for create/edit
    render() {
        return <Form onSubmit={this.props.user ? this.submitEdit : this.submitNew}>
            <FormGroup>
                <Label for="product_name">Product:</Label>
                <Input type="text" name="product_name" onChange={this.onChange} value={this.state.product_name === '' ? '' : this.state.product_name} />
            </FormGroup>
            <FormGroup>
                <Label for="product_desc">Description:</Label>
                <Input type="text" name="product_desc" onChange={this.onChange} value={this.state.product_desc === null ? '' : this.state.product_desc} />
            </FormGroup>
            <FormGroup>
                <Label for="product_category">Category:</Label>
                <Input type="text" name="product_category" onChange={this.onChange} value={this.state.product_category === null ? '' : this.state.product_category} />
            </FormGroup>
            <FormGroup>
                <Label for="image">Image:</Label>
                <Input type="text" name="image" onChange={this.onChange} value={this.state.image === null ? '' : this.state.image}
                    placeholder="Insert URL" />
            </FormGroup>
            <Button>Send</Button>
        </Form>;
    }
}
export default RegistrationForm;