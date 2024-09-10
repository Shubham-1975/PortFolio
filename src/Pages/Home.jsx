import React from "react";
import imgshu from "../assets/images/shubhimg.png";
import pdfr from "../../public/pdf/resume.pdf";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <>
      <div
        className="home container row d-flex justify-content-around align-items-center mx-1 "
        id="home"
      >
        <div className="col-12 col-sm-6 left border-1">
          <h1 className="heading">
            HI,
            <br />
            <span className="mx-4 fs-3">
              I'M <span className="text-warning fs-1">SHUBHAM RAWAT </span>
              <br />
              <span className="mx-4 text-warning">
                I'M A{" "}
                <Typewriter
                  className="typewriter"
                  words={[
                    "Web Developer",
                    "Graphic designer",
                    " App Developer",
                    "Soft Developer",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </span>
          </h1>
          <a
            href={pdfr}
            download="Resume.pdf"
            className="btn btn-outline-warning"
          >
            Download Resume
          </a>
        </div>
        <div className="col-12 img col-sm-6">
          <img src={imgshu} className=" img img-fluid  " alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
