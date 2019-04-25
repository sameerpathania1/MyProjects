import React, { Component } from "react";
import { Col } from "react-bootstrap";
import pic from "../assests/icon.svg";

export default class Anime extends Component {
  render() {
    return (
      <Col fluid>
        <Col>
          <Col className="text-color ">
            <img className="imgicon" src={pic} alt="pic_icon" />
          </Col>
          <Col>
            <h2 className="text-color heading">AceInvoice</h2>
          </Col>
          <Col>
            <h3 className="text-color font-thik">
              Time Tracking and Invoicing
            </h3>
          </Col>
          <Col className="bottomline text-color">
            <p>
              <i class="fas fa-globe" />
              Visit AceInvoice.com
            </p>
          </Col>
        </Col>
      </Col>
    );
  }
}
