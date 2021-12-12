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
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/alex-nikolaienko/" },
  { Social: <FaGithub />, link: "https://github.com/UncleStifler" },
  // { Social: <FaPinterestP />, link: "https://www.pinterest.com/" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}


        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
