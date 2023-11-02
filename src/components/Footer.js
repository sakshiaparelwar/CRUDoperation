import React from "react";
import "./style.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer class="site-footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-info">
              <h3>Contact Us</h3>
              <p>
                Email: <a href="#">contact@mycompany.com</a>
              </p>
              <p>Phone: 123-456-7890</p>
            </div>
            <div class="footer-social">
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2023 MyCompany . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
