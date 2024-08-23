import React from "react";
import { useNavigate } from "react-router-dom"; 
import tvImage from "../assets/tv.png";
import mobileImg from "../assets/mobile.jpg";
import tv2 from "../assets/device-pile-in.png";
import kids from "../assets/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCkids.png";
import vid1 from "../assets/tvvideo.m4v";
import vid2 from "../assets/video2.m4v";

function Home() {
  const navigate = useNavigate(); 

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <nav>
          <div className="nav-left">
            <img
              src="https://www.pngmart.com/files/10/Netflix-Logo-PNG-Image.png"
              alt=""
            />
          </div>
          <div className="nav-right">
            <select name="language" id="language">
              <option value="English">English</option>
              <option value="Hindi">हिन्दी</option>
              <option value="French">French</option>
            </select>
            <button className="signin" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
        </nav>
        <div className="main">
          <h1>Unlimited movies, TV shows and more</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="get-started">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
            />
            <button>Get Started {">"}</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="info">
        <div className="left">
          <h1>Enjoy on your TV</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="right">
          <img src={tvImage} alt="TV" />
          <video className="vid1" src={vid1} autoPlay muted loop></video>
        </div>
      </div>
      <hr />
      <div className="info">
        <div className="left">
          <img src={mobileImg} alt="" />
        </div>
        <div className="right">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
      <hr />
      <div className="info">
        <div className="left">
          <h1>Watch everywhere</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="right">
          <img src={tv2} alt="" />
          <video className="secVid" src={vid2} autoPlay muted loop></video>
        </div>
      </div>
      <hr />
      <div className="info">
        <div className="left">
          <img src={kids} alt="" />
        </div>
        <div className="right">
          <h1>Create profiles for kids</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
