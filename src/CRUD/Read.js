import React, { useState, useEffect } from "react";
import db from "../Firebase-file/firebase-dbs";
import { collection, getDocs } from "firebase/firestore";
import Update from "./Update";
import Delete from "./Delete";
const Read = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [updateData, setUpdateData] = useState({});
  const [falsey, truey] = useState(false);

  useEffect(() => {
    const getEmployeeData = async () => {
      const employeeCollectionRef = collection(db, "Employees");
      const data = await getDocs(employeeCollectionRef);
      //getDocs(employeeCollectionRef);is a promise which get resolved or rejected at somepoint. and once added await it will wait until resolved and then pass the response into data variable.
      setEmployeeData(data.docs.map((doc) => ({ ...doc.data(), Id: doc.id })));
    };
    getEmployeeData();
  }, []);
  function sendEmployeeDataToUpdate() {}
  return (
    <div>
      Our Employees are :
      {employeeData &&
        employeeData.map((employee) => (
          <ul key={employee.Id}>
            <li>{employee.Name}</li>
            <li>{employee.Role}</li>
            <li>{employee.Age}</li>
            <button
              onClick={() => {
                setUpdateData(employee);
              }}
            >
              Update{" "}
            </button>
            <button
              onClick={() => {
                console.log(employee);
                setUpdateData(employee);
                truey(true);
              }}
            >
              Delete
            </button>
          </ul>
        ))}
      {falsey && <Delete data={updateData} />}
      <Update data={updateData} />
    </div>
  );
};

export default Read;
