import React from "react";
import "./FormSignUp.css";
import image from "../../chat/assets/tacticLogo.png";
import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function FormSignUp() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkName, setCheckName] = useState({ message: "", state: "" });
  const [checkPassword, setCheckPassword] = useState({
    message: "",
    state: "",
  });
  const [checkAge, setCheckAge] = useState({ message: "", state: "" });
  const [checkemail, setCheckEmail] = useState({ message: "", state: "" });
  const [classeStyle, setClasseStyle] = useState("");

  let history = useHistory();

  const handleForm = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      age.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      setClasseStyle("red");
    }

    if (e.target.name === "name") {
      if (name.length > 3 && name.length < 25) {
        setCheckName({ message: "valid", state: true });
        setClasseStyle("green");
      } else {
        setCheckName({
          message: "name length should be between 3 and 25 characters",
          state: false,
        });
        setClasseStyle("red");
      }
    }
    if (e.target.name === "age") {
      if (age > 13 && age < 101) {
        setCheckAge({ message: "valid", state: true });
        setClasseStyle("green");
      } else {
        setCheckAge({
          message: "age should be between 14 and 100",
          state: false,
        });
        setClasseStyle("red");
      }
    }
    if (e.target.name === "email") {
      if (email.includes("@") && email.includes(".") && email.length > 7) {
        setCheckEmail({ message: "valid", state: true });
        setClasseStyle("green");
      } else {
        setCheckEmail({ message: "wrong email form", state: false });
        setClasseStyle("red");
      }
    }
    if (e.target.name === "password") {
      if (password.length > 3 && password.length < 25) {
        setCheckPassword({ message: "valid", state: true });
        setClasseStyle("green");
      } else {
        setClasseStyle("red");
        setCheckPassword({
          message: "password length should be between 3 and 25 characters",
          state: false,
        });
      }
    }
  };

  const handleSubmit = () => {
    if (
      [
        checkAge.state,
        checkName.state,
        checkPassword.state,
        checkemail.state,
      ].every((el) => el === true)
    ) {
      Axios.post("http://localhost:3001/register", {
        name: name,
        age: age,
        email: email,
        password: password,
      })
        .then((response) => {
          if (response.status === 200) {
            history.push("/login");
            console.log(response);
          }
        })
        .catch((err) => console.log(err));
      console.log(name, age, password, email);
    }
  };
  return (
    <div>
      <img src={image} alt="logo" className="img" />
      <div className="formContainer">
        <form className="nav-form">
          <div class="form-group">
            <input
              onBlur={handleForm}
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="name"
              type="text"
              class="form-control"
              className="input"
              style={{ borderColor: classeStyle }}
              placeholder="Enter Your Name"
            />
          </div>
          <p className="space" style={{ color: classeStyle }}>
            {checkName.message}
          </p>

          <div class="form-group">
            <input
              onBlur={handleForm}
              onChange={(e) => setAge(e.target.value)}
              value={age}
              name="age"
              type="number"
              min="18"
              max="110"
              class="form-control"
              className="input"
              style={{ borderColor: classeStyle }}
              placeholder="Enter Your Age"
            />
          </div>
          <p className="space" style={{ color: classeStyle }}>
            {checkAge.message}
          </p>
          <div class="form-group">
            <input
              onBlur={handleForm}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              type="email"
              class="form-control"
              className="input"
              style={{ borderColor: classeStyle }}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <p className="space" style={{ color: classeStyle }}>
            {checkemail.message}
          </p>
          <div class="form-group">
            <input
              onBlur={handleForm}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              type="password"
              class="form-control"
              className="input"
              style={{ borderColor: classeStyle }}
              placeholder="Password"
            />
          </div>
          <p className="space" style={{ color: classeStyle }}>
            {checkPassword.message}
          </p>
          <div className="btnRegister">
            <button
              onClick={handleSubmit}
              type="button"
              class="btn btn-primary"
              style={{
                width: "350px",
                height: "48px",
                position: "relative",
                right: "60px",
                marginTop: "50px",
              }}
            >
              Register
            </button>
          </div>

          <br />

          <div className="buttonLog">
            <button
              onClick={() => {
                history.push("/login");
              }}
              type="button"
              class="btn btn-outline-info"
              style={{ width: "250px" }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormSignUp;
