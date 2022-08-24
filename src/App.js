import { ThemaContextProvider } from "./contexts/ThemaContext";
import { LangcontextProvider } from "./contexts/LangContext";
import "./styles.css";
import Container  from "./Container";

function App() {
  return (

      <LangcontextProvider>
        <ThemaContextProvider>
          <Container/>
        </ThemaContextProvider>
      </LangcontextProvider>

  );
}

export default App;
