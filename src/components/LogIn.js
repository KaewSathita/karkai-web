import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LogIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={"login-bg"}>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="card w-45" style={{ maxWidth: "600px" }}>
          <div className="card-body py-5 px-3">
            <div className="d-flex justify-content-center">
              <img className="" src="" alt="" />
            </div>
            <form onSubmit={handleSubmitForm}>
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
              <div className="mb-2 d-grid">
                <button className="btn btn-primary fw-bold rounded-md h-12 text-4.5">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
