import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LanguageDropDown from "./LanguageDropDown";
import style from "../assets/css/AddMovie.module.css";

toast.success('Movie Added Successfully!', {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
  theme: "light",
  });

export default function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [fixedlanguage, setFixedlanguage] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  function settingLanguage(props) {
    setFixedlanguage(props);
  }

  function validation(e) {
    e.preventDefault();
    if (!title || !description || !date || !fixedlanguage) {
      return setError("Please Fill All the Fields");
    } else {
      setError("");
    }

    if (title.length < 4) {
      return setError("Title should be at least of 4 characters");
    } else {
      setError("");
    }
    if (description.length < 4 || description.length > 250) {
      return setError(
        "Description should have minimum 4 and maximum 250 characters"
      );
    } else {
      setError("");
    }
    if (fixedlanguage === "Select A Language") {
      return setError("Please select a Language");
    } else {
      setError("");
    }

    axios
      .post("http://localhost:3000/v1/admin/addmovie", {
        title,
        description,
        date,
        fixedlanguage,
      })
      .then(function (response) {
        
        const data = response.status;
        console.log(data);
        if (data.status === 403) {
          console.log('Movie Already Exist');
        } else {
          console.log(data.message);
          history.push('/admin/movies');
        }
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function clear() {
    props.clear();
  }

  return (
    <div className={style.main}>
      <h1 className={style.heading}>Add Movie Details</h1>

      <h3 className={style.showerror}>{error}</h3>
      <div className={style.input}>
        <h3 className={style.label}>Title:</h3>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={style.inputfield}
        ></input>
      </div>
      <div className={style.input}>
        <h3 className={style.label}>Description:</h3>
        <input
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={style.dinputfield}
        ></input>
      </div>
      <div className={style.input}>
        <h3 className={style.dlabel}>Date:</h3>
        <input
          className={style.dateinputfield}
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>

      <div className={style.input}>
        <h3 className={style.llabel}>Language:</h3>
        <LanguageDropDown setlanguage={settingLanguage} />
      </div>
      <button className={style.add} onClick={validation} type="submit">
        Submit
      </button>
    </div>
  );
}
