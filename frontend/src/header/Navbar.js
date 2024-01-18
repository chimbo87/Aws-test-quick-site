import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg" id="theHeader">
      <div class="container-fluid"  id="navBar">
        <a class="navbar-brand" href="#">
          GeeDataVisualisation
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item"  onClick={() => {
                  navigate("/");
                }}>
              <a class="nav-link active" aria-current="page" href="#" id="navLinks">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" id="navLinks">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" id="navLinks">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" id="navLinks">
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" id="navLinks">
                Privacy
              </a>
            </li>
          </ul>
          <div id="navBtn">
            <button  onClick={() => {
                  navigate("/login");
                }}>
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
