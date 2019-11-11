import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import DataTable from './DataTable';
import RegistrationModal from './RegistrationModal';
import { USERS_API_URL } from '../constants';
class Home extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        this.getItems();
    }
    getItems = () => {
        fetch(`${USERS_API_URL}`)
            .then(res => res.json())
            .then(res => this.setState({ items: res }))
            .catch(err => console.log(err));
    }
    addUserToState = user => {
        this.setState(previous => ({
            items: [...previous.items, user]
        }));
    }
    updateState = (id) => {
        this.getItems();
    }
    deleteItemFromState = id => {
        const updated = this.state.items.filter(item => item.id !== id);
        this.setState({ items: updated })
    }
    render() {
        return <Container>
            <Row>
                <Col>
                    <RegistrationModal isNew={true} addUserToState={this.addUserToState} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <DataTable
                        items={this.state.items}
                        updateState={this.updateState}
                        deleteItemFromState={this.deleteItemFromState} />
                </Col>
            </Row>
        </Container>;
    }
}
export default Home;