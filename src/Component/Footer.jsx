import React from "react";
import "../App.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillLinkedin />
        <AiFillYoutube />
        <ul className="member-footer-links">
          <li className="member-footer-link-wrapper">
            {/* <a className="member-footer-link" href="/browse/audio-description"> */}
              <span className="member-footer-link-content">
                Audio Description
              </span>
            {/* </a> */}
          </li>
          <li className="member-footer-link-wrapper">
            {/* <a className="member-footer-link" href="https://help.netflix.com/"> */}
              <span className="member-footer-link-content">Help Centre</span>
            {/* </a> */}
          </li>
          <li className="member-footer-link-wrapper">
            {/* <a className="member-footer-link" href="/redeem"> */}
              <span className="member-footer-link-content">Gift Cards</span>
            {/* </a> */}
          </li>
          <li className="member-footer-link-wrapper">
            {/* <a className="member-footer-link" href="https://media.netflix.com/"> */}
              <span className="member-footer-link-content">Media Centre</span>
            {/* </a> */}
          </li>
          <li className="member-footer-link-wrapper">
            {/* <a className="member-footer-link" href="http://ir.netflix.com/"> */}
              <span className="member-footer-link-content">
                Investor Relations
              </span>
            {/* </a> */}
          </li>
          <li className="member-footer-link-wrapper">
            {/* <a className="member-footer-link" href="https://jobs.netflix.com/"> */}
              <span className="member-footer-link-content">Jobs</span>
            {/* </a> */}
          </li>
          <li className="member-footer-link-wrapper">
            {/* <a className="member-footer-link" href="https://help.netflix.com/legal/termsofuse" */}
              <span className="member-footer-link-content">Terms of Use</span>
            {/* </a> */}
          </li>
          <li className="member-footer-link-wrapper">
            {/* <a className="member-footer-link" href="https://help.netflix.com/legal/privacy" */}
              <span className="member-footer-link-content">Privacy</span>
            {/* </a> */}
          </li>
          <li className="member-footer-link-wrapper">
            {/* <a className="member-footer-link" href="https://help.netflix.com/legal/notices" */}
              <span className="member-footer-link-content">Legal Notices</span>
            {/* </a> */}
          </li>
          <li className="member-footer-link-wrapper">
            {/* <a className="member-footer-link" href="/Cookies"> */}
              <span className="member-footer-link-content">
                Cookie Preferences
              </span>
            {/* </a> */}
          </li>
          <li className="member-footer-link-wrapper">
            {/* <a className="member-footer-link" href="https://help.netflix.com/legal/corpinfo" */}
              <span className="member-footer-link-content">
                Corporate Information
              </span>
            {/* </a> */}
          </li>
          <li className="member-footer-link-wrapper">
            {/* <a className="member-footer-link" href="https://help.netflix.com/contactus" */}
              <span className="member-footer-link-content">Contact Us</span>
            {/* </a> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
