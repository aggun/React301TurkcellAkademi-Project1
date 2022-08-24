import React, {useContext} from 'react'
import ChangeThema from "./components/ChangeThema"
import Footer from "./components/Footer";
import ChangeLang from "./components/ChangeLang";
import ThemaContext from './contexts/ThemaContext';

function Container() {
    const {thema} = useContext(ThemaContext);
    return (
        <div className={`container ${thema}`}>
            <ChangeThema />
            <hr />
            <ChangeLang />
            <Footer />
        </div>
    )
}

export default Container