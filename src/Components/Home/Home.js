
import React from "react";
import './Home.css'
import watch from "../../Images/Watch.png";
import CustomerReview from "../CustomerReview/CustomerReview";
import HomeCustomerReview from "../HomeCustomerReview/HomeCustomerReview";

const Home = () => {
  return (
    <div className="container d-flex watch-container mx-auto">
      <div className="watch-description col-md-6 col-sm-12">
        <p>SMART WATCH</p>
        <h1 className="watch-title">This will change <br/> your life forever!</h1>
        <p>A smartwatch is a portable device that's designed to be worn on a wrist. Like smartphones, they use touchscreens.</p>
        <button className="live-btn">Live Demo</button>
        <div>
           <HomeCustomerReview/>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <img className="img-fluid" src={watch} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Home;