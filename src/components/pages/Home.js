import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { JSON_API } from "../../helpers/Constants";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`${JSON_API}/users`);
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`${JSON_API}/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>#Лист</h1>
        <table class="table border shadow">
          <thead class="bg-dark">
            <tr>
              <th className="text-white" scope="col">
                #
              </th>
              <th className="text-white" scope="col">
                Имя
              </th>
              <th className="text-white" scope="col">
                Логин
              </th>
              <th className="text-white" scope="col">
                Email
              </th>
              <th className="text-white">Функция</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                    to=""
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
