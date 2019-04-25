import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Anime from "./components/Anime";
import { Container, Col, Row } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loginshow: true
    };
  }

  handleChange = () => {
    setTimeout(
      this.setState(prevState => {
        return {
          loginshow: !prevState.loginshow
        };
      }),
      1000
    );
    console.log(this.state);
  };

  render() {
    let Persons = null;

    if (this.state.loginshow) {
      Persons = <Login changed={this.handleChange.bind(this)} />;
    } else {
      Persons = <Signup changed={this.handleChange.bind(this)} />;
    }
    return (
      <Container className="App justify-content-md-center">
        <Row xs={12}>
          <Col xs={6} className="onlycolor">
            <Anime />
          </Col>
          <Col xs={6} className="onlywhite">
            {Persons}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
