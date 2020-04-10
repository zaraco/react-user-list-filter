import React, {Component} from 'react';
import {Table} from "react-bootstrap";

class ShowUser extends Component {
    constructor() {
        super();
        let items = JSON.parse(localStorage.getItem('items'))
        this.state = {
            items: items
        }


    }

    render() {
        const {items} = this.state
        let total = items.length ? items.map((item, i) =>

            <tr key={i}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td style={
                    item.gender === 'male' ? { background: 'green' } : { background: 'yellow' }
                }>{item.gender}</td>
                <td style={
                    item.state === 'single' ? {background: 'red'} : {background: 'pink'}
                }>{item.state}</td>
            </tr>

        ): null

        return (
            <>
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
