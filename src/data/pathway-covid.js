import severityScreen from "./screens/severity";

const pathwayCovidTransitionMap = {
  screen_severity: {
    rules: [
      {
        all: [
          "question_one_option_A",
          "question_one_option_B",
          "question_one_option_C",
          "question_one_option_D"
        ],
        transitionTo: "outpatient"
      },
      {
        any: ["question_three_option_A", "question_three_option_B"],
        transitionTo: "severe"
      },
      {
        any: ["question_two_option_A", "question_two_option_B"],
        transitionTo: "moderate"
      }
    ]
  },
  outpatient: {
    final: true
  },
  moderate: {
    final: true
  },
  severe: {
    final: true
  }
};

const pathwayCovidDischarge = {
  id: "pathway_covid_discharge",
  title: "COVID Discharge Pathway",
  screens: [severityScreen],
  transitionMap: pathwayCovidTransitionMap
};

export default pathwayCovidDischarge;
