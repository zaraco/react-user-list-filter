import React, {Component} from 'react';
import {Form, Row, Col, Button} from "react-bootstrap";


class AddForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            gender: 'male',
            state: 'single'
        }
    }

    changeHandlerName = (e) => {
        this.setState({
            fistName: e.target.value
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





    render() {
        console.log(this.state)
        return (
            <>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            First Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="first name" onChange={this.changeHandlerName}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalFamily">
                        <Form.Label column sm={2}>
                            Last Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="last name" onChange={this.changeHandlerFamily}/>
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

                    <Button variant="success" size="lg" type="submit" block>
                        Add
                    </Button>
                </Form>
            </>
        );
    }
}

export default AddForm;
