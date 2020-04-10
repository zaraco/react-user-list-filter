import React, {Component} from 'react';
import {Form, Row, Col, Button,Alert} from "react-bootstrap";


class AddForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            gender: 'male',
            state: 'single',
            error: ''
        }
    }

    changeHandlerName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    changeHandlerFamily = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    changeHandlerGender1 = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

    changeHandlerGender2 = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

    changeHandlerState1 = (e) => {
        this.setState({
            state: e.target.value
        })
    }

    changeHandlerState2 = (e) => {
        this.setState({
            state: e.target.value
        })
    }

    clickHandler = (e) => {
        e.preventDefault()
        if(this.state.firstName !== '' && this.state.lastName !== '') {

            let newRow = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                gender: this.state.gender,
                state: this.state.state
            }

            let items = JSON.parse(localStorage.getItem('items'))
            if (!items) {
                items = []
            }

            items.push(newRow)

            localStorage.setItem('items', JSON.stringify(items))
            console.log(items)

            this.setState({
                firstName: '',
                lastName: '',
                gender: 'male',
                state: 'single',
                error: ''
            })
        } else {
            this.setState({
                error: 'Please fill the fields'
            })

        }
    }


    render() {

        let errorAlert = this.state.error !== '' ? <Alert variant="danger">
            {this.state.error} </Alert> : null
        return (
            <>
                {errorAlert}
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            First Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="first name" value={this.state.firstName} onChange={this.changeHandlerName}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalFamily">
                        <Form.Label column sm={2}>
                            Last Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="last name" value={this.state.lastName} onChange={this.changeHandlerFamily}/>
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                Gender
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="male"
                                    name="gender"
                                    id="gender1"
                                    value="male"
                                    checked={this.state.gender === 'male'}
                                    onChange={this.changeHandlerGender1}
                                />
                                <Form.Check
                                    type="radio"
                                    label="female"
                                    name="gender"
                                    id="gender2"
                                    value="female"
                                    checked={this.state.gender === 'female'}
                                    onChange={this.changeHandlerGender2}
                                />

                            </Col>
                        </Form.Group>
                    </fieldset>

                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                State
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="single"
                                    name="state"
                                    id="state1"
                                    value="single"
                                    checked={this.state.state === 'single'}
                                    onChange={this.changeHandlerState1}
                                />
                                <Form.Check
                                    type="radio"
                                    label="married"
                                    name="state"
                                    id="state2"
                                    value="married"
                                    checked={this.state.state === 'married'}
                                    onChange={this.changeHandlerState2}
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>

                    <Button variant="success" size="lg" type="submit" block onClick={this.clickHandler}>
                        Add
                    </Button>
                </Form>
            </>
        );
    }
}

export default AddForm;
