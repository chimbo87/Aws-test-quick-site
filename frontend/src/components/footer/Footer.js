import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid" id="footerPage">
      <div class="row">
        <div class="col-lg-4 col-md-4">
        <div id="footerCard">
          <h4>About</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
        <div id="footerCard">
         <h4>Quick Links</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="footerCard">
            <h4>Contact Us</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
          </div>
        </div>
      </div>
      <div id="footerRightsBox">
        <p> &copy; GeeDataVisualization 2024</p>
      </div>
    </div>
  );
}

export default Footer;
