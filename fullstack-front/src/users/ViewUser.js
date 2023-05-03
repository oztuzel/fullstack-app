import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div>
      <div>
        <div>
          <h2>User Details</h2>
          <div>
            <div>
              Details of user id : {user.id}
              <ul className="list-group">
                <li className="list-group-item"> Name: {user.name}</li>
                <li className="list-group-item"> Username: {user.username} </li>
                <li className="list-group-item"> Email: {user.email} </li>
              </ul>
            </div>
          </div>
          <Link to="/">Back to HomePage</Link>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
