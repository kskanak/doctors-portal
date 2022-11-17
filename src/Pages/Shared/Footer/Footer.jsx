import React from "react";
import { Link } from "react-router-dom";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      className="text-custom-slate mt-20"
      style={{
        background: `url(${footer})`,
        backgroundPosition: "center",
      }}
    >
      <div className="div footer justify-around">
        <div>
          <span className="footer-title">Emergency Checkup</span>
          <Link className="link link-hover" hre>
            Monthly Checkup
          </Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover" hre>
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">
            <></>
          </span>
          <Link className="link link-hover" hre>
            {" "}
            Fluoride Treatment
          </Link>
          <Link className="link link-hover" hre>
            Cavity Filling
          </Link>
          <Link className="link link-hover" hre>
            Teath Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <Link className="link link-hover" hre>
            New York - 101010 Hudson
          </Link>
        </div>
      </div>
      <div className="text-center pt-36 pb-11">
        <p>Copyright © 2022 - All right reserved by Ks Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
