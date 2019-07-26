import React from "react";
import { Container, Row } from "reactstrap";
import Showcard from "./Showcard";
class Showlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showCard = this.props.shows.map((item, key) => (
    <Showcard key={item.Id} name={item.Name} image={item.image} />
  ));
  render() {
    return <Container>{this.showCard}</Container>;
  }
}

export default Showlist;
