import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Add = (props) => {
  console.log("data", props.data);
  let location = useLocation();
  let navigate = useNavigate();
  let initialData =
    location.pathname.indexOf("add") > 0
      ? {
          name: "",
          avatar: "",
          createdAt: 0
        }
      : location.state.emp;
  const [formData, setFormData] = React.useState(initialData);

  console.log("state", location.state);
  const handleSave = () => {
    if (location.pathname.indexOf("add") > 0) {
      props.addEmp(formData);
    } else {
      console.log("Data", props);
      console.log("object final::", formData);
      props.updateEmp(formData, formData.id);
      // location.state.data.updateEmp(location.state.data.emp, location.state.data.emp.id);
    }
  };
  return (
    <div>
      <div>
        {location.pathname.indexOf("add") > 0
          ? "Add new Employee details"
          : "Edit Details"}
      </div>
      <label>Name: </label>
      <input
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <label>url: </label>
      <input
        value={formData.avatar}
        onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
      />
      <label>createdAt: </label>
      <input
        value={formData.createdAt}
        onChange={(e) =>
          setFormData({ ...formData, createdAt: e.target.value })
        }
      />
      <button
        onClick={() => {
          handleSave();
          navigate("/");
        }}
      >
        {location.pathname.indexOf("add") > 0 ? "Add" : "Update"}
      </button>
    </div>
  );
};

export default Add;
