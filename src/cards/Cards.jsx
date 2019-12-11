import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./cards.css";
import Addmovie from "../addmovie/Addmovie";
export default class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="grid-container">
        {this.props.movies.map(el => (
          <div className="grid-items">
            <Card style={{ width: "18rem" }}>
              <Card.Img id="card-image" variant="top" src={el.image} />
              <Card.Body>
                <Card.Text>{el.title}</Card.Text>
                <Card.Text>{el.year}</Card.Text>
                <Card.Text>
                  <Addmovie star={el.ratings} />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
