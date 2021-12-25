import React, { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import db from "../Firebase-file/firebase-dbs";
const Update = ({ data }) => {
  const [updateEmployeeData, setEmployeeData] = useState({
    Name: data.Name,
    Role: data.Role,
    Age: data.Age,
    // Id: data.Id,
  });
  const handleUpdateEmployeeData = async (data) => {
    const employeeDoc = doc(db, "Employees", data.Id);
    console.log(updateEmployeeData);
    await updateDoc(employeeDoc, updateEmployeeData);
    window.location.reload();
  };
  return (
    <div>
      <fieldset>
        <legend>
          <h1>{data.Name}</h1>
        </legend>
        <input
          type="text"
          placeholder="Update Employee name..."
          onChange={(e) =>
            setEmployeeData({ ...updateEmployeeData, Name: e.target.value })
          }
        ></input>
        <input
          type="text"
          placeholder="Update Employee Role..."
          onChange={(e) =>
            setEmployeeData({ ...updateEmployeeData, Role: e.target.value })
          }
        ></input>
        <input
          type="number"
          placeholder="Update Employee age..."
          onChange={(e) =>
            setEmployeeData({ ...updateEmployeeData, Age: e.target.value })
          }
        ></input>
      </fieldset>
      <br></br>
      <button
        onClick={() => {
          handleUpdateEmployeeData(data);
          //   setEmployeeData({ ...updateEmployeeData, Id: data.Id });
          //   console.log(updateEmployeeData, "Update");
          //   console.log()
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Update;
