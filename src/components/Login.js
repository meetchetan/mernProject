import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 400 || !data) {
      window.alert("invalid crediantials");
      console.log("invalid crediantials");
    } else {
      dispatch({ type: "USER", payload:true });
      window.alert("signin successfully");
      console.log("signin successfully");
      navigate("/");
    }
  };
  return (
    <>
      <div className="container">
        <form className="row g-3 my-3" method="POST">
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
              <i className="zmdi zmdi-email"></i>
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              id="inputEmail4"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="password" className="form-label">
              <i className="zmdi zmdi-lock"></i>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              id="password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btnRegister btn btn-primary"
              name="signin"
              id="signin"
              value="Log In"
              onClick={loginUser}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
