import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP, FaGithub,
} from "react-icons/fa";

const SocialShare = [
  // { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  // { Social: <FaTwitter />, link: "https://www.linkedin.com/" },
  // { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaGithub />, link: "https://github.com/UncleStifler" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/alex-nikolaienko/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
