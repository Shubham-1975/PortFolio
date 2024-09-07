import React, { useState } from "react";
import SoftSkillData from "./SoftSkillData";

function SoftTech() {
  const [data, setData] = useState(SoftSkillData);
  return (
    <>
      <div className="d-flex justify-content-around align-items-center my-5 row">
        {data.map((val) => {
          const { id, imgsrc, title, body } = val;
          return (
            <>
              <div className="card d-flex carddecorate justify-content-between align-items-center col-12 col-xl-4 col-md-4 my-4" style={{ width: "18rem" }} key={id}>
                <img src={imgsrc} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-white">{title}</h5>
                  <p className="card-text colr text-center">{body}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default SoftTech;
