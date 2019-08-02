/*jshint esversion: 6 */
import React from "react";
import { Col } from "reactstrap";

class Showcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var imgStyle = { height: 150 }; // rendered as "height:10px"
    return (
      <Col>
        <div className="card" style={{ width: "18rem" }}>
          <img
            style={imgStyle}
            className="card-img-top"
            src={this.props.image}
            alt="Card  cap"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.Desc}</p>
            <a href="#1" className="btn btn-primary">
              More>>
            </a>
          </div>
        </div>
      </Col>
    );
  }
}

export default Showcard;
