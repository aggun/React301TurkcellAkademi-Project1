import React, {useContext} from 'react'
import Langcontext from '../contexts/LangContext';

function ChangeLang() {
     const {lang, setLang}= useContext(Langcontext);
  
  return (
    <div>
        <div>Aktif Dil={lang}</div>
        <button onClick={()=> setLang("TR")}>TR</button>
        <button onClick={()=> setLang("EN")}>EN</button>
        <button onClick={()=> setLang("DE")}>DE</button>
    </div>
  )
}

export default ChangeLang