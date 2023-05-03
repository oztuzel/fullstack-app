import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  // const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    console.log(result.data);
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead>
          <tr className={style.tableHeaderRow}>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td className={style.rowButtons}>
                <Link to={`/viewuser/${user.id}`}>View</Link>
                <Link to={`/edituser/${user.id}`}>Edit</Link>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
