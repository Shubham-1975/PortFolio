import React from "react";
import imgshu from "../assets/Images/shubh3.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { BiWorld } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="d-flex row justify-content-around my-5" id="about">
        <h1 className="text-center heading">About Me</h1>
        <div className="col-12 col-md-6 col-xl-4 aboutimg ">
          <div className="container">
            <div className="image-container d-flex justify-content-around">
              <img
                src={imgshu}
                alt="3D Effect"
                className="img-fluid image-3d"
              />
            </div>
          </div>
        </div>
        <div className="details col-12 col-md-6 col-xl-6 ">
          <h1>Shubham Rawat</h1>
          <p className="para mx-3">
            I am a dedicated IT student with a deep-rooted passion for
            technology and its potential to transform the world. My academic
            journey has been centered around exploring various facets of
            Information Technology, including software development, network
            administration, cybersecurity, and data management. Over the years,
            I have gained proficiency in programming languages such as C, C++,
            Java, and React Js and have developed a keen interest in areas like
            artificial intelligence, cloud computing, and data analytics.
          </p>
          <div className="apout-social-media mx-4 my-3 ">
            <ul className="list-unstyled  shubha">
              <li style={{ textAlign: "left" }} className="mb-1 ">
                <span className="icon">
                  <FaMapMarkerAlt className="fs-4" />
                </span>

                <span className="mx-2">Sheikhpura , Bihar , 811105</span>
              </li>
              <li style={{ textAlign: "left" }}>
                <FaPhoneAlt className="fs-4" />
                <span className="mx-2">707024XXXX</span>
              </li>
              <li style={{ textAlign: "left" }} className="my-1">
                <CgMail className="fs-3" />
                <span className="mx-2">shuku06112003@gmail.com</span>
              </li>
              <li style={{ textAlign: "left" }} className="my-1">
                <BiWorld className="fs-4" />
                <span className="mx-2">www shubham.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
