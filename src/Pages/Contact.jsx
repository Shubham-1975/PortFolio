import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { BiWorld } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";


function Contact() {
  return (
    <>
      <div className="" id="contact">
        <h1 className="colr">Contact Me.....</h1>
        <div className="row d-flex justify-content-around align-items-center">
          <div className="left col-xl-2 "></div>
          <div className="mleft col-xl-3">
            <h4>Contact Me </h4>
            <div className="apout-social-media d-flex justify-content-center align-items-center ">
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
                  <span className="mx-0">shuku06112003@gmail.com</span>
                </li>
                <li style={{ textAlign: "left" }} className="my-1">
                  <BiWorld className="fs-4" />
                  <span className="mx-2">www shubham.com</span>
                </li>
                <div className="social fs-2 d-flex justify-content-between">
                  <li>
                  <a href="" className="">
              <FaFacebookSquare />
            </a>
                  </li>
                  <li>
                    <a href="
                    #"><FaWhatsapp /> </a>
                  </li>
                  <li>

                  <a href="" className="insta">
              <FaInstagramSquare />
            </a>
                  </li>
                  <li>

                  <a href="" className="twit">
              <FaTwitterSquare />
            </a>
                  </li>
                  <li>
                    <a href=""><FaGithub /></a>
                  </li>
                  <li>
                    <a href="#"><CiLinkedin /></a>
                  </li>
                </div>
             
              </ul>
              
            </div>
            
          </div>
          <div className="mright col-xl-5 ">
            <h4>Send Message</h4>
            <form>
              <div class="mb-3 row ">
                <div className="firstn col-xl-6 my-2">
                  <input
                    type="text"
                    className="form-control text-danger"
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="lname col-xl-6 my-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="Number"
                  className="form-control"
                  placeholder="Enter Contact Number"
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="Number"
                  className="form-control"
                  placeholder="Message"
                  cols="9"
                />
              </div>
              <button type="submit" className="btn btn-outline-warning">
                Send
              </button>
            </form>
          </div>
          <div className="right col-xl-2"></div>
        </div>
      </div>
     
    </>
  );
}

export default Contact;
