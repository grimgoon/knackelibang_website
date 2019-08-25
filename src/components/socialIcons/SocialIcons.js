import React from "react";
import SocialIcon from "./SocialIcon";

const socialMedias = ["facebook", "instagram", "twitter", "youtube"];

const SocialIcons = ({socials}) => {
    let socialIcons = [];

    for(let social of socialMedias) {
        const url = `${social}Url`;
        if(typeof socials[social] !== undefined && typeof socials[url] !== undefined) {
            if(socials[social] ) {
                socialIcons.push(<SocialIcon key={social} media={social} url={socials[url]}/>);
            }
        }
    }

    return socialIcons;
}

export default SocialIcons;