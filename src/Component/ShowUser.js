import React, {Component} from 'react';
import {Table, Form, Row, Col} from "react-bootstrap";

class ShowUser extends Component {
    constructor() {
        super();
        let items = JSON.parse(localStorage.getItem('items'))
        this.state = {
            items: items,
            search: ''
        }


    }
changeHandlerSearch = (e) => {
        this.setState({
            search: e.target.value
        })
}
    render() {
        const {items} = this.state
        let total = items.length ? items.map((item, i) =>

            <tr key={i} style={
                item.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || item.lastName.toLowerCase().includes(this.state.search.toLowerCase()) || item.gender.toLowerCase().includes(this.state.search.toLowerCase()) || item.state.toLowerCase().includes(this.state.search.toLowerCase()) ? {display: "table-row"} : {display: "none"}
            }>
                <td style={
                    item.firstName.length > 4 ? {background: 'blue'} : {background: 'gray'}
                }>{item.firstName}</td>
                <td style={
                    item.lastName.length > 6 ? {background: 'brown'} : {background: 'violet'}
                }>{item.lastName}</td>
                <td style={
                    item.gender === 'male' ? {background: 'green'} : {background: 'yellow'}
                }>{item.gender}</td>
                <td style={
                    item.state === 'single' ? {background: 'red'} : {background: 'pink'}
                }>{item.state}</td>
            </tr>
        ) : null

        return (
            <>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalSearch">
                        <Form.Label column sm={2}>
                            Search
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Search..." value={this.state.search} onChange={this.changeHandlerSearch}  />
                        </Col>
                    </Form.Group>
                </Form>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Gender</th>
                            <th>State</th>
                        </tr>
                        </thead>

                        <tbody>

                        {total}

                        </tbody>
                    </Table>
                </>
                );
                }
                }

                export default ShowUser;
