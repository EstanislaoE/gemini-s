"use client";
import React, { useContext } from "react";
import {
  Camera,
  CircleUserRound,
  Compass,
  Lightbulb,
  List,
  SendHorizonal,
} from "lucide-react";
import { Context } from "@/context/ContextProvider";

const GeminiBody = () => {
  const {
    submit,
    recentPrompts,
    displayResult,
    loading,
    result,
    input,
    setInput,
  } = useContext(Context);
  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      <header className="flex items-center justify-between p-5 md:text-xl text-gray-400">
        <p>Gemini</p>
        <CircleUserRound size={28} className="text-softTextColor" />
      </header>
      <main className="max-w-[900px] m-auto my-12 px-4">
        <h1 className="text-4xl md:text-5xl font-medium text-center">
          <p>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Hello Ese
            </span>
          </p>
          <p>How are you ?</p>
        </h1>
        {!displayResult ? (
          <div>
            <div className="h-28 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer mb-4">
              <p>Suggest place to visit</p>
              <Compass
                size={35}
                className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full "
              />
            </div>
            <div className="h-28 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer mb-4">
              <p>What is the impact of autonomous vehicles</p>
              <Lightbulb
                size={35}
                className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full "
              />
            </div>
            <div className="h-28 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer mb-4">
              <p>Come up with recipe for an upcoming event</p>
              <List
                size={35}
                className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full "
              />
            </div>
            <div className="h-28 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer mb-4">
              <p>Evaluate adn rank camera categories</p>
              <Camera
                size={35}
                className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full "
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="my-10 flex items-center gap-5">
              <CircleUserRound size={38} className="text-softTextColor" />
              <p>{recentPrompts}</p>
            </div>
          </div>
        )}

        <div className="absolute bottom-2 w-full max-w-[900px] px-5 m-auto">
          <form action={submit}>
            <div className="flex items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 px-5 rounded-full border ">
              <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                className="flex-1 bg-transparent border-none outline-white p-2 text-md text-red-700 rounded-full"
                placeholder="Ask the Ai bot"
              />
              <div className="flex cursor-pointer">
                <SendHorizonal
                  type="submit"
                  size={20}
                  className="text-green-500"
                />
              </div>
            </div>
          </form>
          <p className="text-gray-400 text-sm text-center">
            Warning: Gemini may display inaccurate information. Double-check its
            reponses and always your common sense.
          </p>
        </div>
      </main>
    </div>
  );
};

export default GeminiBody;
