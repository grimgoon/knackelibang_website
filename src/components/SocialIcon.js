import React from "react";
import facebook from '../img/social/facebook.svg';
import instagram from "../img/social/instagram.svg"

const SocialIcon = (props) => {
    const {media} = props;
    let socialIcon = <div></div>; 

    if(media === "facebook") {
        socialIcon = <a href="" className="socialIcon" style={{backgroundColor: "#3b5998"}}>
            <img src={facebook} alt="Social Icon" />
        </a>
    }

    if(media === "instagram") {
        socialIcon = <a href="" className="socialIcon" style={{backgroundColor: "#E1306C"}}>
            <img src={instagram} alt="Social Icon" />
        </a>
    }

    return (socialIcon);
}

export default SocialIcon;

