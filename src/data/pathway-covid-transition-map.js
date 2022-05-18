import { Engine, Rule } from "json-rules-engine";

const pathwayDecisionMapCovid = {
  decisions: [
    {
      conditions: {
        all: [
          {
            fact: "selectedOptions",
            operator: "contains",
            value: "question_one_option_A"
          },
          {
            fact: "selectedOptions",
            operator: "contains",
            value: "question_one_option_B"
          },
          {
            fact: "selectedOptions",
            operator: "contains",
            value: "question_one_option_C"
          },
          {
            fact: "selectedOptions",
            operator: "contains",
            value: "question_one_option_D"
          }
        ]
      },
      event: {
        type: "question_one_result",
        params: {
          transitionTo: "outpatient"
        }
      }
    },
    {
      conditions: {
        any: [
          {
            fact: "selectedOptions",
            operator: "contains",
            value: "question_three_option_A"
          },
          {
            fact: "selectedOptions",
            operator: "contains",
            value: "question_three_option_B"
          }
        ]
      },
      event: {
        type: "question_three_result",
        params: {
          transitionTo: "severe"
        }
      }
    },
    {
      conditions: {
        any: [
          {
            fact: "selectedOptions",
            operator: "contains",
            value: "question_two_option_A"
          },
          {
            fact: "selectedOptions",
            operator: "contains",
            value: "question_two_option_B"
          }
        ],
        event: {
          type: "question_two_result",
          params: {
            transitionTo: "severe"
          }
        }
      },
      event: {
        type: "question_two_result",
        params: {
          transitionTo: "mild"
        }
      }
    }
  ]
};

export default pathwayDecisionMapCovid;
