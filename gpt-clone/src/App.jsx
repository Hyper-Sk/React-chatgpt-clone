import { useEffect, useState, useRef, useContext } from "react";
import "./App.css";
import botLight from "./assets/chatgpt-light.png";
import botDark from "./assets/chatgpt-dark.png";
import user from "./assets/user.jpg";
import SideBar from "./components/side-bar/SideBar";
import ChatBox from "./components/chat-box/ChatBox";
import InputArea from "./components/input-area/InputArea";
import { Context } from "./context/ContextProvider";
// import { getChatResponse } from "./openai";

function App() {

  const {handleScroll,darkMode} = useContext(Context)
  
  return (
    <>
      <div onScroll={handleScroll} className={darkMode ? "dark-mode App" : "App"}>
        <div className="chat-gpt">
          

          <div className="top">
            <SideBar />
            
            <ChatBox />
          </div>


          <InputArea />
       
        </div>
      </div>
    </>
  );
}

export default App;
