import React, { useState, useEffect } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
        // credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true)
    } catch (error) {
      console.log(error);
      console.log("About us page error");
      // navigate("/signin");
    }
  };
  useEffect(() => {
    userHomePage();
  }, []);
  return (
    <>
      <div className="center container">
        <h1>WLECOME</h1>
        <h1>{userName}</h1>
        <h5>{show ? "Happy to see you back" : "We Are MERN Develooper"}</h5>
      </div>
    </>
  );
};

export default Home;
