import React from "react";
import { Link } from "gatsby";

import logo from "../img/KnackelibangLogo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Link to="/" className="logo" title="Knackelibang">
          <img src={logo} alt="Knackelibang" style={{ width: "320px" }} />
        </Link>
        <p className="copyright">© Knackelibang 2019</p>
      </footer>
    );
  }
};

export default Footer;
