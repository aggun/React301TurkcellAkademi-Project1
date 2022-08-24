import React, {useContext} from 'react'
import ThemaContext from '../contexts/ThemaContext'

function ChangeThema() {
    const {thema, toggleThema}= useContext(ThemaContext);
  
  return (
    <div>
        <div>Aktif Tema={thema}</div>
        <button onClick={toggleThema}>Temayı Değiştir</button>
    </div>
  )
}

export default ChangeThema