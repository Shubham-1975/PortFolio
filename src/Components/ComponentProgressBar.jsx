import React from "react";

function ComponentProgressBar({title,StyleWidth,value, color}) {
  return (
    <>
       <h5 className="text-center colr ">{title}</h5>
      <div class="progress my-2">
        <div
          className={`progress-bar  ${color}`}
          role="progressbar"
          style={{ width:`${StyleWidth}%`}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {/* {value}% */}
        </div>
      </div>
    </>
  );
}

export default ComponentProgressBar;
