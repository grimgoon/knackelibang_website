import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="menuItems">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/about">
            About Us
          </Link>
          <Link className="navbar-item" to="/games">
            Games
          </Link>
          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    );
  }
};

export default Navbar;
