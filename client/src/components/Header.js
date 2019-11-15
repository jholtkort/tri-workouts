import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Header.css";
import { logoutUser } from "../actions/index";

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth.isAuthenticated) {
      case false:
        return;
      default:
        return (
          <li>
            <a href="/auth/logout">Logout</a>
          </li>
        );
    }
  };

  render() {
    return (
      <div className="navbar-fixed ">
        <nav>
          <div className="nav-wrapper orange col">
            <Link
              to={this.props.auth.isAuthenticated ? "/workouts" : "/"}
              className="left brand-logo"
            >
              Tri Workouts
            </Link>
            <ul id="nav-mobile" className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { logoutUser })(Header);
