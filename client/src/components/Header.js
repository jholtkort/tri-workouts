import React, { Component } from "react";
import { connect } from "react-redux";

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
            <a href="/workouts" className="brand-logo">
              Tri Workouts
            </a>
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
