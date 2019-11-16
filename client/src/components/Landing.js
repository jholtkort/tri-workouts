import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../static/sign_in_with_google.png";

class Landing extends Component {
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
      <div className="container center-align">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1521415946093-cad36def6c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt="Swimming"
            className="col s3"
          />
          <img
            src="https://images.unsplash.com/photo-1473322780082-eca592c43a0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt="Cycling"
            className="col s3"
          />
          <img
            width="50"
            src="https://images.unsplash.com/photo-1516487200032-8532cb603261?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt="Running"
            className="col s3"
          />
        </div>
        <div className="my-wrapper valign-wrapper ">
          <div className="container center-align">
            <h1>Welcome to Tri Workouts</h1>
            <h3>A central hub to log all your swim, bike, and run workouts</h3>
            {this.renderButton(this.props)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Landing);
