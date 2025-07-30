import React, { createContext,useState,useRef } from 'react'
// import { getResponse } from '../components/openAi/OpenAI';


export const Context = createContext()

const ContextProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(false);
  const [input, setInput] = useState("");
  const [showChats,setShowChats] = useState(false)
  const [allMessages, setAllMessages] = useState([
    {
      user: "user",
      parts: [{ text: "what is you ai model?" }],
    },
    {
      user: "bot",
      parts: [{ text: "3.5 v" }],
    },
  ]);
  const [isCopy, setIsCopy] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);




  const view = useRef(0);

  const handleScrollBtn = () => {
    view.current.scrollTop = view.current.scrollHeight;
    setTimeout(() => {
      setScrollDown(false)
    },4000)
  };

  const handleScroll = () => {
    console.log(view.current.scrollHeight);
    if (view.current.scrollHeight > 1000) {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
  };

  const copyToClipboard = (i) => {
    navigator.clipboard.writeText(i);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 200);
  };

  const handleDeleteChat = () => {
    let isYes = confirm("Are you sure? All chats will be deleted !!!");
    if (isYes) {
      window.location.reload();
    }
  };

  const handleSumbit = async (e) => {
    if (e.key === "Enter" && input) {
      // const res = await getChatResponse(input)
      setAllMessages([
        ...allMessages,
        {
          user: "user",
          text: input,
        },
        {
          user: "bot",
          text: "Something went wrong with the OpenAI API..",
        },
      ]);

      setInput("");
      handleScroll();
    }
  };

  const handleSumbitButton = async (e) => {
    // const res = await getChatResponse(input)
    if (input) {
      setAllMessages([
        ...allMessages,
        {
          user: "user",
          text: input,
        },
        {
          user: "bot",
          text: "Something went wrong with the OpenAI API..",
        },
      ]);
      setInput("");
      handleScroll();
    }
  };

  const handleMessages = async (input) => {
    setInput(input);
    setAllMessages([
      ...allMessages,
      {
        user: "user",
        text: input,
      },
      {
        user: "bot",
        text: "Something went wrong with the OpenAI API..",
      },
    ]);
    setInput("");
    handleScroll();
  };


  const state = {
    darkMode,
    setDarkMode,
    input,
    setInput,
    setAllMessages,
    allMessages,
    isCopy,
    setIsCopy,
    scrollDown,
    setScrollDown,
    handleScrollBtn,
    handleScroll,
    copyToClipboard,
    handleDeleteChat,
    handleSumbit,
    handleSumbitButton,
    handleMessages,
    view,
    showChats,
    setShowChats
  }




  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider