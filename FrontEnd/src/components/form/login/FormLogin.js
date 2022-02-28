import React from "react";
import Axios from "axios";
import { useState } from "react";
import "./login.css";
import image from "../../chat/assets/tacticLogo.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function FormLogin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = () => {
    Axios.post("http://localhost:3001/login", {
      name: name,
      password: password,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 200) {
          dispatch({ type: "CONNECT", payload: true });
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("wrong combination check your informations please");
        dispatch({ type: "CONNECT", payload: false });
      });
  };

  return (
    <div>
      <img src={image} alt="logo" className="img" />
      <div className="formContainer">
        <form className="nav-form">
          <div class="form-group">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              class="form-control"
              className="input"
              placeholder="Enter Your username"
            />
          </div>

          <div class="form-group">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              class="form-control"
              className="input"
              placeholder="Enter Your Password"
            />
          </div>
        </form>
        <p className="errorMessage">{errorMessage}</p>

        <div className="btnLog">
          <button
            onClick={handleSubmit}
            type="button"
            class="btn btn-primary"
            style={{ width: "350px", height: "48px" }}
          >
            Login
          </button>
        </div>

        <br />

        <div className="btnRegister">
          <button
            onClick={() => {
              history.push("/signup");
            }}
            type="button"
            class="btn btn-outline-info"
            style={{ width: "250px" }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
