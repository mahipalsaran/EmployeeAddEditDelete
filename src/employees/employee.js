import React from "react";
import { Link } from "react-router-dom";

const Employee = (props) => {
  let passedData = props;
  console.log("delete", props.deleteEmp);
  return (
    <div>
      <div>
        <span>Name: </span>
        <span>{props.emp.name}</span>
      </div>
      <div>
        <span>Img: </span>
        <img alt="Hero" src={props.emp.avatar}></img>
      </div>
      <div>
        <span>Created At: </span>
        <span>{props.emp.createdAt}</span>
      </div>
      <div>
        <button>
          <Link to="/add" state={{ emp: passedData.emp }}>
            Add
          </Link>
        </button>
        <button>
          <Link to={`/edit/${props.emp.id}`} state={{ emp: passedData.emp }}>
            Edit
          </Link>
        </button>
        <button onClick={() => props.deleteEmp(props.emp.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Employee;
