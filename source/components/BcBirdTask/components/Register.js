import React from "react";
import axios from "axios";
import { useFormik } from "formik";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      pId: 0,
      pName: "",
      pPrice: 0,
      InStock: false,
    },

    onSubmit: (values) => {
      axios.post("http://127.0.0.1:3030/addproduct", values);
      alert("Record Inserted");
    },
  });

  return (
    <>
      <div className="container border border-warning p-4">
        <form onSubmit={formik.handleSubmit}>
          <h3 className="text-danger">Register Product</h3>
          <dl>
            <dt>Product ID</dt>
            <dd>
              <input
                type="text"
                name="pId"
                value={formik.values.pId}
                onChange={formik.handleChange}
              ></input>
            </dd>
            <dt>Name</dt>
            <dd>
              <input
                type="text"
                name="pName"
                value={formik.values.pName}
                onChange={formik.handleChange}
              ></input>
            </dd>
            <dt>Price</dt>
            <dd>
              <input
                type="text"
                name="pPrice"
                value={formik.values.pPrice}
                onChange={formik.handleChange}
              ></input>
            </dd>
            <dt>Stock</dt>
            <dd>
              <input
                type="checkbox"
                name="InStock"
                checked={formik.values.InStock}
                onChange={formik.handleChange}
              ></input>
            </dd>
          </dl>
          <button className="btn btn-outline-warning">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
