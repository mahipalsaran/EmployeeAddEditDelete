import React from "react";
import Employee from "./employee";
const EmployeeList = (props) => {
  return (
    <div>
      {props.data.map((emp, i) => {
        return <Employee key={i} emp={emp} {...props} />;
      })}
    </div>
  );
};

export default EmployeeList;
