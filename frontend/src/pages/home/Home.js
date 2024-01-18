import React from "react";
import "./Home.css";
import aboutImg from "../../assets/about.jpeg";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid" id="homePage">
        <div id="homebox">
          <h1>
            Transform raw data into captivating narratives, Your journey to
            meaningful visualization starts here!
          </h1>
          <button onClick={() => {
                  navigate("/signup");
                }}>Get Started</button>
        </div>
      </div>
      <div className="container">
        <div class="row" id="offerBox">
          <h4>What We Do</h4>
          <div class="col-lg-4 col-md-4">
            <div id="offerCard">
              <i class="bx bx-objects-vertical-bottom"></i>
              <h6>Lorem Ipsum is simply dummy text</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="offerCard">
              <i class="bx bxl-deezer"></i>
              <h6>Lorem Ipsum is simply dummy text</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="offerCard">
              <i class="bx bx-circle-three-quarter"></i>
              <h6>Lorem Ipsum is simply dummy text</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="offerCard">
              <i class="bx bx-scatter-chart"></i>
              <h6>Lorem Ipsum is simply dummy text</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="offerCard">
              <i class="bx bxs-component"></i>
              <h6>Lorem Ipsum is simply dummy text</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="offerCard">
              <i class="bx bx-pie-chart-alt-2"></i>
              <h6>Lorem Ipsum is simply dummy text</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div class="row" id="missionBox">
          <div class="col-lg-6 col-md-4">
            <div id="missionCard">
              <img src={aboutImg}></img>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="missionCard">
              <h2>
                {" "}
                Explore the power of visual storytelling and uncover insights
                that drive informed decisions.
              </h2>
              <button>Become A Client</button>
            </div>
          </div>
        </div>
        <div id="contactBox">
          <h4>Get In Touch With Us</h4>
          <div class="row">
            <div class="col-lg-8 col-md-4">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div id="contactBtn">
                <button>Submit</button>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div id="contactCardWrap">
                <div id="contactCardWrapBox">
                  <i class="bx bx-map"></i>
                  <p>
                    123 Mars Street. <br></br>Jupiter Mars
                  </p>
                </div>
                <div id="contactCardWrapBox">
                  <i class="bx bx-envelope"></i>
                  <p>
                    text@example.com <br></br>text@example.com
                  </p>
                </div>
                <div id="contactCardWrapBox">
                  <i class="bx bx-phone"></i>
                  <p>
                    +123 234 2345 <br></br>+123 234 2345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
