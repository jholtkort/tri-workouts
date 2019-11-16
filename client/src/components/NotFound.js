import React, { Fragment, Component } from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

import logo from "../static/sign_in_with_google.png";

class NotFound extends Component {
  renderButton = props => {
    switch (props.auth.isAuthenticated) {
      case false:
        return (
          <div className="row center-align">
            <a href="/auth/google" className="col s6">
              <img src={logo} alt="Sign in with Google" />
            </a>
          </div>
        );
      default:
        return (
          <div className="mt-3">
            <a href="/workouts" class="waves-effect waves-light btn">
              Go To Dashboard
            </a>
          </div>
        );
    }
  };

  render() {
    return (
      <Fragment>
        <Row>
          <Col className="text-center mt-5">
            <i className="material-icons large">error</i>
            <h1>Page Not Found</h1>
            <p className="large">Sorry, this page does not exist</p>
            {this.renderButton(this.props)}
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(NotFound);
