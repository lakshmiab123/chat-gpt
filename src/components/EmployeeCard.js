import React from "react";
import "./Employee.css";
import frameicon from "../img/Frame 1321316469 (4).png";
import caseicon from "../img/Case Minimalistic.png";
import usericon from "../img/User Check Rounded.png";
const EmployeeCard = ({ image }) => {
  return (
    <div className="outer-card-container">
      <div className="card-top">
        {image ? (
          <img
            src={frameicon}
            alt="gemic"
            style={{ height: "35px", width: "35px" }}
          />
        ) : (
          <div style={{ height: "35px", width: "35px" }}></div>
        )}
        <div className="topRight">
          <div className="userNameSec">
            <h6>William</h6>
            <h6>User@123</h6>
          </div>
          <div className="userDesignation">
            <div className="desigDetails">
              <img src={caseicon} alt="caseicon" />
              <p style={{transform:'translate(0,7px)'}}>Department</p>
            </div>
            <div className="desigDetails">
              <img src={usericon} alt="usericon" />

              <p style={{transform:'translate(0,7px)'}}>Supervisor</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="card-bottom">
        <p>
          Phone Number : <span style={{ fontWeight: "bold" }}>73783895735</span>
        </p>
        <p>
          Date of joining :{" "}
          <span style={{ fontWeight: "bold" }}>12 - 2- 2024</span>
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default EmployeeCard;
