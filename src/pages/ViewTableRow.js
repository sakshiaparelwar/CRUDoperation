import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function ViewTableRow(props) {
  const DeleteEmployee = () => {
    const url =
      "https://companydata-3gyu.onrender.com/employees/delete-employee/";
    axios
      .delete(url + props.obj._id)
      .then((res) => {
        if (res.status === 200) {
          alert("Employee Data deleted succefully");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <tr>
      <td>{props.obj.name}</td>
      <td>{props.obj.phone}</td>
      <td>{props.obj.email}</td>
      <td>{props.obj.password}</td>
      <td>
        <Link to={`/edit-employee/${props.obj._id}`}>
          <button id="action">Edit</button>
        </Link>
        <button id="action" onClick={DeleteEmployee}>
          Delete{" "}
        </button>
      </td>
    </tr>
  );
}

export default ViewTableRow;
