import React from "react";
import LibraryLogo from "../assets/Library.svg"

const Footer = () => {
    return (
        <Footer>
            <div className="container">
              <div className="row row__colmn">
                <a href="/">
                <figure className="footer__logo">
                  <img src="{LibraryLogo}"  className="footer__logo--img" alt="" />
                </figure>
                </a>
              </div>
            </div>
        </Footer>

    );
}


export default Footer;