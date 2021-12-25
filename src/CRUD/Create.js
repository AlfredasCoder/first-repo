import React, { useState } from "react";
import db from "../Firebase-file/firebase-dbs";
import { collection, addDoc } from "firebase/firestore";
const Create = () => {
  const [employeeData, setEmployeeData] = useState({
    Name: "",
    Role: "",
    Age: 0,
  });
  const addEmployeeData = async () => {
    const employeeCollectionRef = collection(db, "Employees");
    await addDoc(employeeCollectionRef, { ...employeeData });
    console.log(employeeData);
    window.location.reload();
  };
  return (
    <div>
      <h4>Add Employee Data</h4>
      <div>
        <input
          type="text"
          placeholder="Employee Name..."
          onChange={(e) =>
            setEmployeeData({ ...employeeData, Name: e.target.value })
          }
        />
        <br></br>
        <input
          type="text"
          placeholder="Employee Role"
          onChange={(e) => {
            setEmployeeData({ ...employeeData, Role: e.target.value });
          }}
        />
        <br></br>
        <input
          type="number"
          placeholder="Employee Age"
          onChange={(e) =>
            setEmployeeData({ ...employeeData, Age: e.target.value })
          }
        />
        <br></br>
        <button onClick={addEmployeeData}>Submit data</button>
      </div>
    </div>
  );
};

export default Create;
