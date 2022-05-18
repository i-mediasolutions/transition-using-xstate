import React, { useState } from "react";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import pathwayCovidDischarge from "../data/pathway-covid";
import { buildMachine, customGuards } from "../shared/pathwayMachine";
import Screen from "./screen";

const pathwayMachine = Machine(
  buildMachine(pathwayCovidDischarge),
  customGuards()
);

const Pathway = () => {
  const [current, send] = useMachine(pathwayMachine);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const addSelectedOption = (optionValue) => {
    setSelectedOptions([...selectedOptions, optionValue]);
  };

  const removeSelectedOption = (optionValue) => {
    setSelectedOptions(selectedOptions.filter((opt) => opt !== optionValue));
  };

  // This transitions us to the next screen :)
  const transitionNextScreen = () => {
    send("NEXT", {
      payload: {
        selectedOptions,
        currentState: current.value
      }
    });
  };

  const renderSelectedOptions = () =>
    selectedOptions.map((opt) => <div>- {opt}</div>);

  return (
    <div>
      <h1>{pathwayCovidDischarge.title}</h1>
      <div>
        <Screen
          activeScreenId={current.value}
          addSelectedOption={addSelectedOption}
          removeSelectedOption={removeSelectedOption}
        />
      </div>
      <br />
      {!current.done && (
        <button onClick={transitionNextScreen}>Next &gt;</button>
      )}
      {current.done && (
        <>
          <div>Answered Ids:</div>
          {renderSelectedOptions()}
          <br />
          <button type="button">Place Order</button>
        </>
      )}
    </div>
  );
};

export default Pathway;
