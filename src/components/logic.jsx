import React from "react";
import { Engine, Rule } from "json-rules-engine";
import pathwayDecisionMapCovid from "../data/pathway-covid-transition-map";

async function testScreenStuff() {
  const engine = new Engine();
  const rule = new Rule({
    conditions: {
      result: false,
      all: [
        {
          fact: "answers",
          operator: "contains",
          value: "question_one_option_A"
        },
        {
          fact: "answers",
          operator: "contains",
          value: "question_one_option_B"
        }
      ]
    },
    event: {
      type: "result",
      params: {
        transitionTo: "next"
      }
    }
  });

  let facts = {
    answers: ["question_one_option_A", "question_one_option_B"]
  };

  engine.addRule(rule);

  const {
    results, // rule results for successful rules
    failureResults, // rule results for failed rules
    events, // array of successful rule events
    failureEvents, // array of failed rule events
    almanac // Almanac instance representing the run
  } = await engine.run(facts);

  console.log(events);
}

async function boolTest() {
  const engine = new Engine();
  const rule = new Rule({
    conditions: {
      result: false,
      all: [
        {
          fact: "answers",
          operator: "equal",
          value: true
        }
      ]
    },
    event: {
      type: "result",
      params: {
        transitionTo: "next"
      }
    }
  });

  let facts = {
    answers: false
  };

  engine.addRule(rule);

  const {
    results, // rule results for successful rules
    failureResults, // rule results for failed rules
    events, // array of successful rule events
    failureEvents, // array of failed rule events
    almanac // Almanac instance representing the run
  } = await engine.run(facts);

  console.log(events);
}

async function buildMap() {
  const engine = new Engine();
  const rules = pathwayDecisionMapCovid.decisions;

  rules.forEach((rule) => {
    engine.addRule(rule);
  });

  let facts = {
    selectedOptions: ["question_two_option_A", "question_two_option_B"]
  };

  const {
    results, // rule results for successful rules
    failureResults, // rule results for failed rules
    events, // array of successful rule events
    failureEvents, // array of failed rule events
    almanac // Almanac instance representing the run
  } = await engine.run(facts);

  console.log(events);
}

const Logic = () => {
  return (
    <div>
      Here we will test logic:
      <div>
        <button onClick={boolTest}>Test</button>
      </div>
    </div>
  );
};

export default Logic;
