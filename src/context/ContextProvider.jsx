"use client";

import { runChat } from "@/lib/gemini";
import React, { createContext, useState, useCallback } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [recentPrompts, setRecentPrompts] = useState("");
  const [displayResult, setDisplayResults] = useState(false);
  const [prevPropmts, setPrevPrompts] = useState([]);

  const appendToResult = useCallback((newContent) => {
    setResult((prevResult) => prevResult + newContent);
  }, []);

  const submit = useCallback(
    async (prompt) => {
      setLoading(true);
      setResult("");
      setDisplayResults(true);
      setRecentPrompts(input);

      if (input && prompt) {
        setPrevPrompts((prev) => [...prev, input]);
      }

      try {
        const response = input ? await runChat(input) : await runChat(prompt);

        // Process and stream the response
        const words = response.split(" ");
        for (let i = 0; i < words.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 50)); // Adjust delay as needed
          appendToResult(words[i] + " ");
        }
      } catch (error) {
        console.error("Error in submit:", error);
        appendToResult("An error occurred while processing your request.");
      } finally {
        setLoading(false);
        setInput("");
      }
    },
    [input, appendToResult]
  );

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
