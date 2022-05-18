const severityScreen = {
  id: "screen_severity",
  type: "CALCULATOR",
  title: "Severity Classification Screen",
  questions: [
    {
      id: "question_one",
      label: "Mild",
      description: "Must have ALL of the following",
      options: [
        {
          label: "Clinically Well appearing",
          value: "question_one_option_A"
        },
        {
          label: "O2 saturation ≥94% with no desaturation with ambulation",
          value: "question_one_option_B"
        },
        {
          label: "RR < 22 and HR <100",
          value: "question_one_option_C"
        },
        {
          label:
            "No Risk Factors (Age > 60, DM, CHF, HTN, Pulmonary, Immunosuppressed, Obesity)",
          value: "question_one_option_D"
        }
      ]
    },
    {
      id: "question_two",
      description: "Choose ANY that apply:",
      label: "Moderate",
      options: [
        {
          label: "Increased Work of Breathing",
          value: "question_two_option_A"
        },
        {
          label: "Resting hypoxemia (<94%) or ambulatory desaturation",
          value: "question_two_option_B"
        }
      ]
    },
    {
      id: "question_three",
      description: "Choose ANY that apply:",
      label: "Severe",
      options: [
        {
          label: "Confusion or Altered Mental Status",
          value: "question_three_option_A"
        },
        {
          label: "Heart rate 130+",
          value: "question_three_option_A"
        }
      ]
    }
  ]
};

export default severityScreen;
