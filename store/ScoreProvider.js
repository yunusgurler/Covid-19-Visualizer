import React, { useState } from "react";

const ScoreContext = React.createContext({
  score: "",
  scoreHandler: (score) => {},
});

export const ScoreContextProvider = (props) => {
  const [score, setScore] = useState("");

  const scoreHandler = (score) => {
    setScore(score);
  };

  const contextValue = {
    score: score,
    scoreHandler: scoreHandler,
  };

  return (
    <ScoreContext.Provider value={contextValue}>
      {props.children}
    </ScoreContext.Provider>
  );
};

export default ScoreContext;
