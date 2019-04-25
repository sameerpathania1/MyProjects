import React, { Component } from "react";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import { Spring } from "react-spring/renderprops";

export default class Login extends Component {
  state = {
    showfirst: false
  };

  handlefirst = () => {
    this.setState({
      showfirst: true
    });
  };

  render() {
    return (
      <Spring from={{ marginLeft: 200 }} to={{ marginLeft: 0 }}>
        {props => (
          <div style={props}>
            <Container fluid>
              <Col>
                <Col>
                  <h2 className="signintext">Sign in</h2>
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

                    <Form.Group
                      controlId="formBasicPassword"
                      className="formcontrol"
                    >
                      <Form.Control
                        className="controlinput"
                        size="lg"
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Row xs="12">
                        <Col xs="7">
                          <p
                            style={{
                              marginTop: "7px",
                              cursor: "pointer",
                              color: "#6f6f6f"
                            }}
                          >
                            <a href>Forgot Password?</a>
                          </p>
                        </Col>
                        <Col xs="5">
                          <Button
                            style={{ marginTop: "10 px" }}
                            className="btnsignin"
                            variant="primary"
                            size="lg"
                            block
                          >
                            Sign in
                          </Button>
                        </Col>
                      </Row>
                    </Form.Group>
                  </Form>
                </Col>
                <Col className="text-center" block>
                  <Button
                    className="btncreateaccount text-center"
                    block
                    onClick={this.props.changed}
                  >
                    {" "}
                    Don't have an account? &nbsp; <b>Sign up</b>
                  </Button>
                </Col>
              </Col>
            </Container>
          </div>
        )}
      </Spring>
    );
  }
}
