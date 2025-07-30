import React, { useContext } from "react";
import "./chat-box.css";
import { Context } from "../../context/ContextProvider";
import user from "./../../assets/user.jpg";
import ai from "./../../assets/logo.jpg";

const ChatBox = () => {
  const {
    view,
    handleScroll,
    scrollDown,
    allMessages,
    handleScrollBtn,
    darkMode,
    setDarkMode,
    copyToClipboard,
    isCopy,
    showChats,
    setShowChats,
  } = useContext(Context);

  console.log(allMessages);

  return (
    <div className="top-right">
      {/* <div className="text" ref={view} onScroll={handleScroll}>
        {scrollDown && (
          <div className="scroll-down" onClick={handleScrollBtn}>
            <i className="uil uil-arrow-down"></i>
          </div>
        )}

        {allMessages.length === 0 && (
          <div className="text-blank-view">
            <h1>Introducing The ChatGPT</h1>
            <p>Future Of Artificial Intelligence</p>
          </div>
        )}

        {allMessages.map((item, i) => {
          return (
            <>
              {item.user === "user" && (
                <div className="user" key={i}>
                  <img src={user} alt="" />
                  <p>{item.text}</p>
                </div>
              )}

              {item.user === "bot" && (
                <div className="bot">
                  <img alt="" />
                  <p>
                    {item.text ? item.text : <span className="loader"></span>}
                  </p>
                  <div className="copy">
                    {isCopy ? (
                      <i className="uil uil-check"></i>
                    ) : (
                      <i
                        onClick={() => copyToClipboard(item.text)}
                        className="uil uil-copy"
                      ></i>
                    )}
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div> */}
      <div className="top-right-content">
        {showChats ? (
          <div className="intro">
            <h1>Introducing The ChatGPT</h1>
            <p>Future Of Artificial Intelligence</p>
          </div>
        ) : (
          <div className="chats">
            {allMessages.map((item, i) => {
              return item.user === "user" ? (
                <div className="user">
                  <img src={user} alt="user" />
                  <p>{item.parts[0].text}</p>
                </div>
              ) : (
                <div className="model">
                  <img src={ai} alt="" />
                  <p>{item.parts[0].text}</p>
                  <div className="icon">
                    {isCopy ? (
                      <i className="uil uil-check"></i> 
                    ) : (
                      <i
                        onClick={() => copyToClipboard(item.parts[0].text)}
                        className="uil uil-copy"
                      ></i>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
