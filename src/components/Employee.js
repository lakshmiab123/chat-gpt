import React from "react";
import "./Employee.css";
import EmployeeCard from "./EmployeeCard";
import dashboardIcon from "../img/Widget 5.png";
const Employee = () => {
  return (
    <div className="add-user-container">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'84%'}}>
        <div style={{display:'flex',alignItems:'center',gap:'2px'}}>
          <img src={dashboardIcon} alt="caseicon" />
          <p style={{transform:'translate(2px,7px)'}}>/</p>
          <p style={{transform:'translate(7px,7px)'}}>User Profile</p>
        </div>
        <button className="add-user-button">+ Add User</button>
      </div>
      <div className="container-employee">
        <EmployeeCard image={true} />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard image={true} />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </div>
  );
};

export default Employee;
