import { useState } from "react";
import { useHistory } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios';
import LanguageDropDown from "./LanguageDropDown";
import style from "../assets/css/AddMovie.module.css";

export default function AddSeries(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [fixedlanguage, setFixedlanguage] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  function settingLanguage(props) {
    setFixedlanguage(props);
  }

  async function validation(e) {
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

    const data = await axios.post('http://localhost:3000/v1/admin/addseries', {
      title,description,date,fixedlanguage
    })

    if(data.status === 201){
      console.log('ok');
      history.push('/admin/movies');
    }
    // .then(function (response) {
    //   console.log(response);
    //   const data = response.data;
    //   if(data.status) {
    //       console.log(data.message)
    //       history.push('/admin/movies');
    //   }
    //   else {
    //       console.log(data.message)
    //   }
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });


  }

  function clear() {
    props.clear();
  }

  return (
    <div className={style.main}>
      <h1 className={style.heading}>Add Series Details</h1>

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
