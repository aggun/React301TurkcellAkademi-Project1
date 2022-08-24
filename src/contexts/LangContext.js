import { createContext,useState } from "react";

const Langcontext = createContext();

export const LangcontextProvider = ({children}) => {
    const [lang, setLang]=useState("TR");

    const values = {
        lang,
        setLang,
    };

    return<Langcontext.Provider value={values} >
        {children}
    </Langcontext.Provider>
};

export default Langcontext;