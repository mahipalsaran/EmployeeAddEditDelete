import "./styles.css";
import EmployeeList from "./employees/employeeList";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./employees/new/add";
export default function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://62ef438b8d7bc7c2eb7713d7.mockapi.io/api/UsersList")
      .then((res) => setData(res.data));
  }, []);

  const addEmp = (obj) => {
    console.log("Here", obj);
    obj.id = 6;
    let list = [...data, obj];
    setData([...list]);
  };

  const updateEmp = (obj, id) => {
    console.log("OBject::", obj);
    console.log("Got Hit");
    let list = [...data];
    let newList = list.map((val, i) => {
      if (val.id === obj.id) {
        return obj;
      }
      return val;
    });
    console.log("New List of emp::", newList);
    setData([...newList]);
  };

  const deleteEmp = (id) => {
    console.log("Laggoing id;:", id);
    let list = [...data];
    let index;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        console.log("At right");
        index = i;
      }
    }
    list.splice(index, 1);
    console.log("List after delete", list.length);
    setData([...list]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <EmployeeList
              data={data}
              addEmp={addEmp}
              deleteEmp={deleteEmp}
              updateEmp={updateEmp}
            />
          }
        />
        <Route path="add" element={<Add addEmp={addEmp} />} />
        <Route path="edit">
          <Route
            path=":empid"
            element={<Add updateEmp={updateEmp} data={data} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
