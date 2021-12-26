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
  //as we are chaning the state every time when update button is pressed component re-renders by which there is no need for us to use useEffect hook
  const handleUpdateEmployeeData = async (data) => {
    const employeeDoc = doc(db, "Employees", data.Id);
    console.log(updateEmployeeData);
    await updateDoc(employeeDoc, updateEmployeeData);
    window.location.reload();
  };
  // were not calling this function unless the update button untill data which is to be updated and state is set that is the reason even though we get an empty object intially its not a big problem.
  return (
    <div>
      <fieldset>
        <legend>
          <h1>{data.Name}</h1>
        </legend>
        <input
          type="text"
          placeholder="Update Employee name..."
          required
          onChange={(e) =>
            setEmployeeData({ ...updateEmployeeData, Name: e.target.value })
          }
        ></input>
        <input
          type="text"
          required
          placeholder="Update Employee Role..."
          onChange={(e) =>
            setEmployeeData({ ...updateEmployeeData, Role: e.target.value })
          }
        ></input>
        <input
          type="number"
          required
          placeholder="Update Employee age..."
          onChange={(e) =>
            setEmployeeData({ ...updateEmployeeData, Age: e.target.value })
          }
        ></input>
        <button
          onClick={() => {
            handleUpdateEmployeeData(data);
          }}
        >
          Update
        </button>
      </fieldset>
      {/* <br></br> */}
    </div>
  );
};

export default Update;
