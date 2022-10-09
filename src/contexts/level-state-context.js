/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable max-len */
import React, { useState, useContext } from "react";

const LevelStateContext = React.createContext();

export function levelStatesMethods()
{
  return useContext(LevelStateContext);
}

export function LevelStatesProvider({ children })
{
  const [pickedCorrectly, setPickedCorrectly] = useState([]);

  const [selectedLevel, setSelectedLevel] = useState("");

  const addCorrect = (name, coordinates) =>
  {
    if (!pickedCorrectly.some((pick) => pick.name === name))
    {
      return setPickedCorrectly((prevState) => ([...prevState, { name, coordinates }]));
    }
  };

  const methods = {
    pickedCorrectly,
    addCorrect,
    selectedLevel,
    setSelectedLevel,
  };

  return (
    <LevelStateContext.Provider value={methods}>
      {children}
    </LevelStateContext.Provider>
  );
}