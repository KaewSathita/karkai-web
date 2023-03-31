import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Profile from "../assets/images/Profile.png";
import classes from "./SignUp.module.css";

function SignUp() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // confirmPassword: "",
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await signup(input);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={"login-bg"}>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="card w-50" style={{ maxWidth: "600px" }}>
          <div className="card-body py-5 px-3">
            <div className="d-flex justify-content-center">
              <img className={classes["good-logo"]} src={Profile} alt="logo" />
            </div>
            <form onSubmit={handleSubmitForm}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-md h-13"
                  placeholder="First Name"
                  name="firstName"
                  value={input.firstName}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-md h-13"
                  placeholder="Last Name"
                  name="lastName"
                  value={input.lastName}
                  onChange={handleChangeInput}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-md h-13"
                  placeholder="Email address"
                  name="email"
                  value={input.email}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control rounded-md h-13"
                  placeholder="Password"
                  name="password"
                  value={input.password}
                  onChange={handleChangeInput}
                />
              </div>
              {/* <div className="mb-3">
                <input
                  type="password"
                  className="form-control rounded-md h-13"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={handleChangeInput}
                />
              </div> */}
              <div className="mb-2 d-grid">
                <button className="btn btn-primary fw-bold rounded-md h-12 text-4.5">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
