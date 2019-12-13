import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

function WithLoading(Component) {
  return class WihLoadingComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      };
    }
    componentDidMount() {
      setTimeout(() => this.setState({ isLoading: false }), 2000);
    }
    render() {
      if (!this.state.isLoading) return <Component {...this.props} />;
      return <Spinner animation="grow" />;
    }
  };
}
export default WithLoading;
