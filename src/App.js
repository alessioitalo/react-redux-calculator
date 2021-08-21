import Display from "./components/Display";
import Keypad from "./components/Keypad";
import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`App ${theme.theme}`}>
      <div className="container">
        <Header />
        <Display />
        <Keypad />
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/alessioitalo"
          target="_blank"
          rel="noreferrer"
        >
          alessioitalo
        </a>
        .
      </div>
    </div>
  );
}

export default App;
