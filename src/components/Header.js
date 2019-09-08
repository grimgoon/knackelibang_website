import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import SocialIcons from "./socialIcons/SocialIcons";

const Header = ({ socials }) => {
  return (
    <div className="header">
      <Link to="/" className="logo" title="Knackelibang">
        <img src={logo} alt="Knackelibang" style={{ width: "88px" }} />
      </Link>
      <div className="socialItems">
        <SocialIcons socials={socials} />
      </div>
    </div>
  );
};

export default Header;
