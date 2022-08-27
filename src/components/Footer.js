import { useContext } from "react";
import Langcontext from "../contexts/LangContext";
import ThemaContext from "../contexts/ThemaContext";
function Footer() {

    const { thema, toggleThema } = useContext(ThemaContext)
    const { lang, setLang } = useContext(Langcontext)
    return (

        <div>
            <hr></hr>
            Footer
            <div>
                Aktif Tema: {thema}
                <div>
                    <button onClick={toggleThema}>Temayı Değiştir</button>
                </div>
            </div>
             <hr/>
            <div>
                Aktif Dil: {lang}
                <div>
                    <button onClick={() => setLang("TR")}>TR</button>
                    <button onClick={() => setLang("EN")}>EN</button>
                    <button onClick={() => setLang("DE")}>DE</button>
                </div>
            </div>

        </div>
    )
}
export default Footer
