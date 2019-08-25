import React from "react";
import facebook from "../../img/social/facebook.svg";
import instagram from "../../img/social/instagram.svg";
import twitter from "../../img/social/twitter.svg";
import youtube from "../../img/social/youtube.svg"

const SocialIcon = props => {
  const { media, url } = props;
  let socialIcon = <div></div>;

  if (media === "facebook") {
    socialIcon = (
      <a href={url} className="socialIcon" style={{ backgroundColor: "#3b5998" }}>
        <img src={facebook} alt="Social Icon" />
      </a>
    );
  }

  if (media === "instagram") {
    socialIcon = (
      <a href={url} className="socialIcon" style={{ backgroundColor: "#E1306C" }}>
        <img src={instagram} alt="Social Icon" />
      </a>
    );
  }

  if (media === "youtube") {
    socialIcon = (
      <a href={url} className="socialIcon" style={{ backgroundColor: "#c4302b" }}>
        <img src={youtube} alt="Social Icon" />
      </a>
    );
  }

  if (media === "twitter") {
    socialIcon = (
      <a href={url} className="socialIcon" style={{ backgroundColor: "#38A1F3" }}>
        <img src={twitter} alt="Social Icon" />
      </a>
    );
  }

  return socialIcon;
};

export default SocialIcon;
