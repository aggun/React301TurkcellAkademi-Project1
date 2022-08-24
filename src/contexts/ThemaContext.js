import { createContext ,useState, useEffect} from "react";

const ThemaContext = createContext();
const defaultThema = localStorage.getItem("thema") || "light";

export const ThemaContextProvider = ({children}) => {
const [thema, setThema]=useState(defaultThema);

useEffect(()=>{
    localStorage.setItem("thema", thema);
}, [thema]);

const toggleThema = ()=>{
    setThema((prev)=>(prev==="light"? "dark":"light"));
}
const values = {
    thema,
    toggleThema,
};
    return <ThemaContext.Provider value={values}>
        {children}
    </ThemaContext.Provider>
}

export default ThemaContext;