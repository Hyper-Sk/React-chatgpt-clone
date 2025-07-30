import React, { useContext } from "react";
import "./input-area.css";
import { Context } from "../../context/ContextProvider";

const InputArea = () => {
  const {
    input,
    setInput,
    handleDeleteChat,
    handleSumbit,
    setDarkMode,
    darkMode,
    handleSumbitButton,
  } = useContext(Context);

  window.addEventListener("keyup", () => {
    console.log('first')
  });
  if (window.key === "Enter" && input) {
    console.log("hello");
  }

  return (
    <div className="text-area">
      <div className="text-area-content">
        <div className="text-field">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            onKeyDown={handleSumbit}
            placeholder="Enter your prompt here"
          />
          <button className="send" onClick={handleSumbitButton}>
            <i className="uil uil-message"></i>
          </button>
        </div>

        <div className="mode" onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? (
            <i className="uil uil-brightness"></i>
          ) : (
            <i className="uil uil-moon"></i>
          )}
        </div>
        <div className="delete" onClick={handleDeleteChat}>
          <i className="uil uil-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default InputArea;
