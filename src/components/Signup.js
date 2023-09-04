import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    console.log(data)
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate("/signin");
    }
  };
  return (
    <>
      <div className="container">
        <form className="row g-3 my-3" method="POST">
          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              <i className="zmdi zmdi-account"> </i>
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              aria-label="Your Name"
              name="name"
              id="name"
              autoComplete="off"
              value={user.name}
              onChange={handleInput}
            />
          </div>
          <div className="col-md-6">
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
              value={user.email}
              onChange={handleInput}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              <i className="zmdi zmdi-phone"></i>
              Your Mobile Number
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Your Mobile Number"
              aria-label="First name"
              name="phone"
              id="phone"
              autoComplete="off"
              value={user.phone}
              onChange={handleInput}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              <i className="zmdi zmdi-case"></i>
              Enter Your Profession
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Profession"
              aria-label="Last name"
              name="work"
              id="work"
              autoComplete="off"
              value={user.work}
              onChange={handleInput}
            />
          </div>
          <div className="col-md-6">
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
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="cpassword" className="form-label">
              <i className="zmdi zmdi-lock"></i>
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              id="cpassword"
              name="cpassword"
              autoComplete="off"
              value={user.cpassword}
              onChange={handleInput}
            />
          </div>
          {/* <div className="form-group form-button">
            <imput
              type="submit"
              name="signup"
              className="form-submit"
              value="register"
              onClick={PostData}
            />
          </div> */}
          <div className="clo-mg-12">
          <button
            type="submit"
            className="btnRegister btn btn-primary"
            name="signin"
            id="signin"
            value="register"
            onClick={PostData}
          >
            Register
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
