import React, { useContext } from 'react'
import { Context } from '../../context/ContextProvider'

const SideBar = () => {

    const {darkMode, handleDeleteChat, handleMessages} = useContext(Context)


  return (
    <div className="top-left">
              <div className="top-left-top">
                <div className="logo">
                  <img  />
                  <h3>Chat GPT 3.5</h3>
                </div>
                <div className="new-chat">
                  <i className="uil uil-plus"></i>
                  <p onClick={handleDeleteChat}>New Chat</p>
                </div>

                <div className="question1">
                  <i className="uil uil-comment-alt-dots"></i>
                  <p onClick={() => handleMessages("What is Programming?")}>
                    What is Programming?{" "}
                  </p>
                </div>

                <div className="question2">
                  <i className="uil uil-comment-alt-dots"></i>
                  <p onClick={() => handleMessages("What are API's?")}>
                    What are API's?
                  </p>
                </div>
              </div>

              <div className="top-left-bottom">
                <div className="home">
                  <i className="uis uis-house-user"></i>
                  <p onClick={handleDeleteChat}>Home</p>
                </div>

                <div className="saved">
                  <i className="uis uis-bookmark"></i>
                  <p>Saved</p>
                </div>

                <div className="pro">
                  <i className="uis uis-rocket"></i>
                  <p>Upgrade to pro</p>
                </div>
              </div>
            </div>
  )
}

export default SideBar