import React, { useState } from "react";
import ProjectData from "../Components/ProjectData";

function Project() {
  const [data, setData] = useState(ProjectData);
  return (
    <>
      <div id="project">
        <div className="my-3">
          <h1 className="colr">Recent Project</h1>
        </div>

        <div className="d-flex row justify-content-around align-items-center my-4">
          {data.map((val) => {
            const { id, imgsrc, title, body } = val;
            return (
              <>
                <div className="container  col-xl-6 d-flex col-md-6 justify-content-around align-content-center">
                  <div
                    className=" border mb-3 carddecorate my-5 rounded"
                    style={{ maxWidth: "540px" }}
                  >
                    <div className="row g-0 d-flex  justify-content-around ">
                      <div className="col-md-6 ">
                        <img
                          src={imgsrc} // Replace with your image URL
                          className="img-fluid rounded-start h-100 w-100"
                          alt="Left side pic"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <h5 className="card-title">Card Title</h5>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <p className="card-text cardlink mb-3">
                            <a className=" colr " href="">
                              View More
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Project;