import React, { useState, useEffect } from "react";
import db from "../Firebase-file/firebase-dbs";
import { doc, deleteDoc } from "firebase/firestore";
const Delete = ({ data }) => {
  const deleteEmployeeData = async (data) => {
    const employeeDoc = doc(db, "Employees", data.Id);
    await deleteDoc(employeeDoc);
    window.location.reload();
  };
  if (data) {
    deleteEmployeeData(data);
  }
  return <h1>{`Deleting ${data.Name} from the organisation`}</h1>;
};

export default Delete;
