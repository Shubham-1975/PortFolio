import React, { useState } from "react";

import SkillCardData from "../Components/SkillCardData";
import SkillFull from "./SkillFull";
import { FaRegEye } from "react-icons/fa";

function Technical() {
  const [btn, setBtn] = useState(false);
  return (
    <>
      <div className=" skill-main " id="skill">
        <div className="d-flex justify-content-around align-items-center row ">
          {SkillCardData.map((val, index) => {
            return (
              <>
                <div
                  key={index}
                  className="card my-4 d-flex justify-content-center align-items-center col-12 c0l-md-12 carddecorate"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={val.imgsrc}
                    className="card-img-top"
                    style={{ height: "200px" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-titl text-white">{val.title}</h5>
                    <p className="card-text ">{val.body}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <button
          className="btn btn-outline-warning"
          onClick={() => {
            setBtn(!btn);
          }}
        >
          {/* <FaRegEye className="" />*/} Know more
        </button>
        <div>{btn ? <SkillFull /> : " "}</div>
      </div>
    </>
  );
}

export default Technical;
