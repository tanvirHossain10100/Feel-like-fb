import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Chats } from "./components/Chats/Chats";
import { Message } from "./components/Message/Message";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <div className="mainHeaderDiv">
          <Header></Header>
        </div>
        <div className="chatsSection">
          <Chats></Chats>
          <Message></Message>
        </div>
      </div>
    </>
  );
}

export default App;
