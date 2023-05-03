import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div>
      <div>
        <div>
          <h2>Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit">Submit</button>
            <Link to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
