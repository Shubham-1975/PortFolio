import React, { useState } from "react";

import Technical from "./Technical";
import SoftTech from "./SoftTech";

function SkillRadio() {
  const [value, setValue] = useState(true);
  return (
    <>
      <div className="text-end">
        <h1 className="text-center colr">Skills</h1>
        <div className="form-check form-check-inline">
          <label
            className="form-check-label text-warning"
            htmlFor="inlineRadio1"
            
          >
            Technical Skill
          </label>
          <input
            onClick={() => {
              setValue(!value);
              setValue(true);
            }}
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            defaultChecked
          />
        </div>

        <div className="form-check form-check-inline cursor-pointer">
          <label
            className="form-check-label text-warning"
            htmlFor="inlineRadio2"
          >
            Soft skills
          </label>
          <input
            onClick={() => {
              setValue(!value);
              setValue(false);
            }}
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
          />
        </div>
      </div>
      {value ? <Technical /> : <SoftTech />}
    </>
  );
}

export default SkillRadio;
