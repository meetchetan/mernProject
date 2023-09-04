import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Contact = () => {
  // const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
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
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      console.log("About us page error");
      // navigate("/signin");
    }
  };
  useEffect(() => {
    userContact();
  }, []);

  // we are storing data in state

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // send the data to backend

  const contactform = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();
    if (!data) {
      console.log("message not send");
    } else {
      alert("message send");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* phone number */}
              <div className="contact_info_item d-flex justify-content-start align-item-center">
                <i className="zmdi zmdi-phone"></i>
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+91 8650 686 166</div>
                </div>
              </div>
              {/* email */}
              <div className="contact_info_item d-flex justify-content-start align-item-center">
                <i className="zmdi zmdi-email"></i>
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">chetang525@gmail.com</div>
                </div>
              </div>
              {/* Address */}
              <div className="contact_info_item d-flex justify-content-start align-item-center">
                <i className="zmdi zmdi-gps-dot"></i>
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">Bangalore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact form */}
      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact-_form_title">Get In Touch</div>
                <form method="POST" id="contact_form">
                  <div className="conatct_form_name d-flex justify-content-between align-item-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Your Name"
                      required="true"
                      onChange={handleInputs}
                      value={userData.name}
                      name="name"
                    />

                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="Your Email"
                      required="true"
                      onChange={handleInputs}
                      value={userData.email}
                      name="email"
                    />

                    <input
                      type="number"
                      id="contact_form_number"
                      className="contact_form_number input_field"
                      placeholder="Your Phone Number"
                      required="true"
                      onChange={handleInputs}
                      value={userData.phone}
                      name="email"
                    />
                  </div>
                  <div className="contact_form_text mt-5 conatct_form_name d-flex justify-content-between align-item-between">
                    <textarea
                      className="text_field contact_form_message"
                      placeholder="Message"
                      cols="150"
                      rows="5"
                      onChange={handleInputs}
                      value={userData.message}
                      name="message"
                    ></textarea>
                  </div>
                  <div className="contact_form_button mt-5">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                      onClick={contactform}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
