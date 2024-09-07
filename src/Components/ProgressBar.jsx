import React from "react";
import ComponentProgressBar from "./ComponentProgressBar";

function ProgressBar() {
  return (
    <>
      <div className="progress-main row d-flex justify-content-around align-items-center">
        <h1 className="text-start colr">Progress</h1>
        <div className="left-progress col-12 col-6 col-xl-6 ">
          <h2 className="text-start mx-5 colr my-2">WEB DEV 👉</h2>
         
          <ComponentProgressBar title='JS' StyleWidth='70' value='70' color='bg-warning'/>
          <ComponentProgressBar title='REACT' StyleWidth='85' value='85' color='bg-success'/>
          <ComponentProgressBar title='EXPRESS JS' StyleWidth='80' value='80' color='bg-danger'/>
          <ComponentProgressBar title='NODE JS' StyleWidth='75' value='75' color='bg-warning'/>
          <ComponentProgressBar title='MONGODB' StyleWidth='80' value='80' color='bg-'/>

        </div>
        
        <div className="right-progress col-12 col-6 col-xl-6">
        <h2 className="text-start mx-2 colr my-2">Programming Language👉</h2>
        <ComponentProgressBar title='C' StyleWidth='70' value='70' color='bg-success'/>
        <ComponentProgressBar title='C++' StyleWidth='72' value='72' color='bg-warning'/>
        <ComponentProgressBar title='JAVA' StyleWidth='70' value='70' color='bg-danger'/>
        <ComponentProgressBar title='MONGODB' StyleWidth='50' value='50'/>
        <h4 className="text-start mx-2 colr my-2">OTHER👉</h4>
        <ComponentProgressBar title='GIT & GITHUB' StyleWidth='50' value='50' color='bg-warning'/>

        </div>
      </div>
    </>
  );
}

export default ProgressBar;
