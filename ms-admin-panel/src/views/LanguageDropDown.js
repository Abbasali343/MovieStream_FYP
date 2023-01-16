import { useState } from "react";
import style from "../assets/css/LanguageDropDown.module.css";

export default function LanguageDropDown(props) {
  const [isActive, setIsActive] = useState(false);
  const [language,setLanguage] = useState('Select A Language');
  function optionshow() {
    if(isActive===false){
        setIsActive(true);
    }else{
        setIsActive(false);
    }
    
  }

  function urdulanguage(){
    setLanguage('URDU');
    setIsActive(false);
    
  }

  function hindilanguage(){
    setLanguage('HINDI');
    setIsActive(false);
    
  }

  function englishlanguage(){
    setLanguage('ENGLISH');
    setIsActive(false);
    
  }

  props.setlanguage(language);

  return (
    <>
      <div className={style.dropdown} onClick={optionshow}>
        {language}
      </div>
      {isActive && (
        <div className={style.options}>
          <button className={style.language} onClick={urdulanguage}>Urdu</button>
          <button className={style.language} onClick={englishlanguage}>English</button>
          <button className={style.language} onClick={hindilanguage}>Hindi</button>
        </div>
      )}
    </>
  );
}


