import React, { Component } from "react";
import { Container, Button, Form, Col } from "react-bootstrap";
import { Spring } from "react-spring/renderprops";
export default class Signup extends Component {
  render() {
    return (
      <Spring from={{ marginLeft: 200 }} to={{ marginLeft: 0 }}>
        {props => (
          <div style={props}>
            <Container fluid>
              <Col>
                <Col style={{ marginTop: "100px" }}>
                  <button className="hiddenbtn" onClick={this.props.changed}>
                    <i class="fas fa-arrow-left" />
                  </button>
                </Col>
                <Col>
                  <h2 className="signuptext">Sign Up</h2>
                </Col>
                <Col className="formstart">
                  <Form>
                    <Form.Group
                      controlId="forBasicemail"
                      className="formcontrol"
                    >
                      <Form.Control
                        className="controlinput"
                        size="lg"
                        type="email"
                        placeholder="Email"
                        name="email"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Button
                        style={{
                          marginTop: "10 px",
                          float: "right",
                          width: "40%",
                          fontSize: "18px"
                        }}
                        className="btnsignin "
                        variant="primary"
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </Form.Group>
                  </Form>
                </Col>
              </Col>
            </Container>
          </div>
        )}
      </Spring>
    );
  }
}
