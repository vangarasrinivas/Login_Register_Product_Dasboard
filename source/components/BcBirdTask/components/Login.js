import React, { useState } from "react";

const LoginComponent = () => {
  const title = "User Login";

  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const { userName, password } = data;

  const getData = (e) => {
    setData({ ...data, [e.target.value]: [e.target.value] });
  };

  const submitData = (e) => {
    e.PreventDefault();
    console.log(data);
  };

  return (
    <>
      <div className="ms-4">
        <h3 className="bg-warning w-25 text-white">{title}</h3>
        <form onSubmit={submitData}>
          <dl>
            <dt>UserName</dt>
            <dd>
              <input
                type="text"
                name="userName"
                value={userName}
                onChange={getData}
              />
            </dd>
            <dt>Password</dt>
            <dd>
              <input
                type="password"
                name="Password"
                value={password}
                onChange={getData}
              />
            </dd>
            <button type="submit" className="btn btn-primary">
              LogIn
            </button>
          </dl>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
