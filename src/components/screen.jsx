import React from "react";
import severityScreen from "../data/screens/severity";
import { finalScreens } from "../data/screens/finalScreens";

// faking .. would normally pull from DB by screen id
function fetchScreen(activeScreenId) {
  switch (activeScreenId) {
    case "screen_severity":
      return severityScreen;
    case "moderate":
      return finalScreens.moderate;
    case "severe":
      return finalScreens.severe;
    case "outpatient":
      return finalScreens.outpatient;
    default:
      return null;
  }
}

const Screen = ({
  activeScreenId,
  addSelectedOption,
  removeSelectedOption
}) => {
  const screen = fetchScreen(activeScreenId);

  const setSelectCheck = (event) => {
    if (event.target.checked) {
      addSelectedOption(event.target.value);
    } else {
      removeSelectedOption(event.target.value);
    }
  };

  const renderOptions = (options) => {
    return options.map((option) => (
      <div>
        <input
          key={option.value}
          type="checkbox"
          value={option.value}
          onClick={setSelectCheck}
        />{" "}
        {option.label}
      </div>
    ));
  };

  const renderQuestions = () => {
    if (!screen || !screen.questions) {
      return null;
    }

    return screen.questions.map((question) => {
      return (
        <div key={question.id}>
          <h2>{question.label}</h2>
          <h5>{question.description}</h5>
          <form>{renderOptions(question.options)}</form>
        </div>
      );
    });
  };

  return (
    <>
      <h2>{screen.title}</h2>
      {screen && screen.questions && <div>{renderQuestions()}</div>}
    </>
  );
};

export default Screen;
