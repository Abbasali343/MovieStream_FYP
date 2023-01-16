import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from "../assets/css/LogIn.module.css";


export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const navigate = useNavigate();

  const logIn = async () => {
    if (!email || !password) {
      window.alert("Please fill all fields");
      return;
    }

    if (!validateEmail(email)) {
      return window.alert("Please enter valid email");
    }

    if (password.length < 8) {
      return window.alert("Password should be at least 8 characters!");
    }

    const data = await axios.post("http://localhost:3000/v1/users/logIn", {
      email,
      password,
    });
    console.log(data);
    if (data.status === 200) {
      window.alert("Login SuccessFull");
       navigate('/');
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
        <div className={style.head}>
          <h1 className={style.signup}>LogIn</h1>
        </div>
        <div className={style.info}>
          <label className={style.label} placeholder="Enter Your Email">
            Email:
          </label>
          <input
            className={style.input}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.info}>
          <label className={style.label} htmlFor="">
            Password:
          </label>
          <input
            className={style.pinput}
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={style.add} onClick={logIn}>
          LogIn
        </button>
        <p className={style.text}>New User?</p>
        <p className={style.link} onClick={()=>{navigate('/signup')}}>Register</p>
       
      </div>
    </div>
  );
}
