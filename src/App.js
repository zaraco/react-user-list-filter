import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import AddForm from "./Component/AddForm";
import ShowUser from "./Component/ShowUser";


class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Router>
                                <Switch>
                                    <Route path="/add" component={AddForm}/>
                                    <Route path="/show" component={ShowUser}/>
                                </Switch>
                            </Router>
                        </Col>
                    </Row>
                </Container>

            </>
        );
    }
}

export default App;
