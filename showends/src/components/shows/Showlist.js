import React from "react";
import { Container, Row } from "reactstrap";
import Showcard from "./Showcard";
class Showlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    //console.log(this.props);
    var showCard = this.props.shows.map((item, key) => (
      <Showcard
        key={item.Id}
        Desc={item.Desc}
        name={item.Name}
        image={item.Image}
      />
    ));
    return (
      <Container>
        <Row>{showCard}</Row>
      </Container>
    );
  }
}

export default Showlist;
