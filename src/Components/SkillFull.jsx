import React, { useState } from "react";
import WebDevData, { ProgrammingData } from "./SkillFullData";
import { Lia500Px } from "react-icons/lia";
import ProgressBar from "./ProgressBar";

function SkillFull() {
  const [Data, setData] = useState(WebDevData);
  return (
    <>
      <div className="">
        <h3 className="text-start">WEB DEV 👇</h3>
        <ul className="list-unstyled d-flex container justify-content-around flex-wrap row my-3">
          {Data.map((val, index) => {
            return (
              <>
                <div className="col-12 col-md-1 col-xl-1 my-3">
                  <li>
                    <img src={val.imgsrc} alt="" />
                  </li>
                  <h2 className="my-3 colr">{val.title}</h2>
                </div>
              </>
            );
          })}
        </ul>
        <h3 className="text-start">PROGRAMMING LANGUAGE 👇</h3>
        <ul className="list-unstyled d-flex container justify-content-around align-items-center flex-wrap row my-3">
          {ProgrammingData.map((val, index) => {
            return (
              <>
                <div className="col-12 col-md-1 col-xl-1 my-3 ">
                  <li>
                    <img src={val.imgsrc} alt="" />
                  </li>
                  <h2 className="my-3 colr">{val.title}</h2>
                </div>
              </>
            );
          })}
        </ul>
        <ProgressBar />
      </div>
    </>
  );
}

export default SkillFull;
