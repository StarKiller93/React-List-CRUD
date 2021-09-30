import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { JSON_API } from "../../helpers/Constants";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`${JSON_API}/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Назад
      </Link>
      <h1 className="display-4">Id Пользователя: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Имя: {user.name}</li>
        <li className="list-group-item">Логин: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Тел.: {user.phone}</li>
        <li className="list-group-item">Website: {user.website}</li>
      </ul>
    </div>
  );
};

export default User;
