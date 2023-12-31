import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import ViewTableRow from "./ViewTableRow";
import "../components/style.css";

function ViewTable() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios
      .get("https://companydata-3gyu.onrender.com/employees")
      .then(({ data }) => {
        setEmployees(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const TableData = () => {
    return employees.map((res, i) => {
      return <ViewTableRow obj={res} key={i} />;
    });
  };
  return (
    <Layout>
      <div id="signup">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{TableData()}</tbody>
        </table>
      </div>
    </Layout>
  );
}

export default ViewTable;
