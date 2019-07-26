import React from "react";
import { Col } from "reactstrap";

class Showcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var divStyle = { height: 150, width: 150 }; // rendered as "height:10px"
    return (
      <div>
        {this.props.name}
        <img
          src={this.props.image}
          alt="something"
          style={divStyle}
          className="img-thumbnail"
        />
      </div>
    );
  }
}

export default Showcard;
