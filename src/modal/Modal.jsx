import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./modal.css";
export default class ModalCom extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log(this.state);
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="inputs">
            Movie Name :
            <input
              type="text"
              name="title"
              onChange={e => this.handleState(e)}
            />
            Poster :
            <input
              type="text"
              name="image"
              onChange={e => this.handleState(e)}
            />
            Year :
            <input
              type="text"
              name="year"
              onChange={e => this.handleState(e)}
            />
            Rating :
            <input
              type="number"
              name="ratings"
              onChange={e => this.handleState(e)}
            />
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              this.props.handleClose();
              this.props.addNewMovie(this.state);
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
