import React from "react";
import events from "../Components/EducationData";

function Education() {
  return (
    <>
      <div id="education">
        <h1 className="colr">Education</h1>
        {/* <div className="main row">
          <div className="left col-xl-2 col-0">
dsdfsds
          </div>
          <div className="middle col-xl-8 col-10">
dssdfsd
          </div>
          <div className="right col-xl-2 col-0">
sddfdfsdfs
          </div>
        </div> */}
        <div className="main row my-4">
          <div className="left col-xl-3 col-0 col-md-0"></div>
          <div className="middle col-xl-6 col-12 col-md-12 ">
            <div className="timeline-container container-fluid d-flex justify-content-center row">
              {events.map((event, index) => {
                const { id, date, title, description, board } = event;
                return (
                  <>
                    <div key={index} className="timeline-item">
                      <div className="timeline-dot">
                        <div className="timeline-date mx-4"> {date}</div>
                      </div>

                      <div className="timeline-content border carddecorate col-12">
                        <h3>{title}</h3>
                        <p className="colr">
                          {description} <br />
                          {board}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="right col-xl-3 col-0 col-md-0"></div>
        </div>
      </div>
    </>
  );
}

export default Education;
