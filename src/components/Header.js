import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import SocialIcon from "./SocialIcon";

const Header = ({ socials }) => {
console.log(socials);
  return (
    <div className="header">
      <Link to="/" className="logo" title="Knackelibang">
        <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
      </Link>
      <div className="socialItems">
        <SocialIcon media="facebook" />
        <SocialIcon media="instagram" />
      </div>
    </div>
  );
};

export default Header;
