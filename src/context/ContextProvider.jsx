"use client";
import { runChat } from "@/lib/gemini";
import React, { createContext, useState } from "react";
// import { runChat } from "@/lib/gemini";
// // import { runChat } from "../lib/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [recentPrompts, setRecentPrompts] = useState("");
  const [displayResult, setDisplayResults] = useState(false);
  const [prevPropmts, setPrevPrompts] = useState([]);

  //paragraph Delay
  const paragraphDelay = (index, newWord) => {
    setTimeout(() => {
      setResult((prev) => prev + newWord);
    }, 70 * index);
  };

  //on submit
  const submit = async (prompt) => {
    setLoading(true);
    setResult("");
    setDisplayResults(true);
    setRecentPrompts(input);

    if (input && prompt) {
      setPrevPrompts((prev) => [...prev, input]);
    }
    try {
      const response = input ? await runChat(input) : await runChat(prompt);
      const boldResponse = response.split("**");
      let newArray = "";
      for (let i = 0; i < boldResponse.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newArray += boldResponse[i];
        } else {
          newArray += "<b>" + boldResponse + "</b>";
        }
      }
      let newRes = newArray.split("*").join("</br>");
      let newRes2 = newRes.split(" ");

      for (let i = 0; i < newRes2.length; i++) {
        const newWord = newRes2[i];
        paragraphDelay(i, newWord + " ");
      }
    } catch (error) {
      setLoading(false);
      setInput("");
    }
  };

  //ligth and Dark mode
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const contextValue = {
    theme,
    toggle,
    submit,
    setInput,
    input,
    result,
    loading,
    displayResult,
    recentPrompts,
    setRecentPrompts,
    setPrevPrompts,
    prevPropmts,
  };
  return (
    <Context.Provider value={contextValue}>
      <div className={theme}>{children}</div>
    </Context.Provider>
  );
};

export default ContextProvider;
