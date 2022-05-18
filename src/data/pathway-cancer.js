const pathwayMoffittCancer = {
  id: "pathway_moffitt_cancer",
  debug: "pathway", // this is for me debugging help
  title: "Moffitt Cancer Pathway",
  sections: [
    "section_oligometastatic",
    "section_unresectable_good_performance_status"
  ]
};

const sectionOligometastatic = {
  id: "section_oligometastatic",
  debug: "section", // this is for debugging
  title: "Oligomestatic",
  screens: [
    "screen_initial_recommendations_and_available",
    "screen_criteria",
    "debug_screen"
  ],
  initialStartScreen: "screen_initial_recommendations_and_available"
};

const screenInitialRecommendationsAndAvailable = {
  id: "screen_initial_recommendations_and_available",
  debug: "screen",
  type: "recommendation",
  title: "Initial Recommendations And Available",
  recommendations: [
    {
      id: "initial_rec_one",
      title: "First Recommendation",
      subTitle: "Additional subtitle of stuff",
      orders: ["Thoracic NSCLC Molecular Testing"]
    },
    {
      id: "initial_rec_two",
      title: "Secon Recommendation",
      subTitle: "Additional subtitle of stuff",
      orders: ["Moffitt STAR – Pathology/Laboratory CS"]
    }
  ],
  transitionTo: "screen_criteria"
};

const screenCriteria = {
  id: "screen_initial_recommendations_and_available",
  debug: "screen",
  type: "dynamicQuestion",
  title: "Criteria",
  questions: [
    {
      id: "question_one",
      type: "boolean",
      label: "Adrenal Nodule?",
      options: [
        {
          label: "Yes",
          value: true,
          orders: ["Radiation Clinic Appointment Request"]
        },
        {
          label: "No",
          value: false,
          orders: []
        }
      ],
      decisionMap: [
        {
          conditions: {
            all: [
              {
                fact: "response",
                operator: "equal",
                value: true
              }
            ]
          },
          event: {
            type: "question_one",
            params: {
              questionTransition: "question_five",
              orders: ["Radiation Clinic Appointment Request"]
            }
          }
        },
        {
          conditions: {
            all: [
              {
                fact: "response",
                operator: "equal",
                value: false
              }
            ]
          },
          event: {
            type: "question_one",
            params: {
              questionTransition: "question_two",
              orders: []
            }
          }
        }
      ]
    },
    {
      id: "question_two",
      type: "boolean",
      label: "Brain Metastases?",
      options: [
        {
          label: "Yes",
          value: true,
          orders: [
            "NeuroOnc Clinic Appointment Request",
            "Radiation Clinic Appointment Request"
          ]
        },
        {
          label: "No",
          value: false,
          orders: ["Thoracic Clinic Appointment Request"]
        }
      ],
      decisionMap: [
        {
          conditions: {
            all: [
              {
                fact: "response",
                operator: "equal",
                value: true
              }
            ]
          },
          event: {
            type: "question_two",
            params: {
              questionTransition: "question_five",
              orders: [
                "NeuroOnc Clinic Appointment Request",
                "Radiation Clinic Appointment Request"
              ]
            }
          }
        },
        {
          conditions: {
            all: [
              {
                fact: "response",
                operator: "equal",
                value: false
              }
            ]
          },
          event: {
            type: "question_two",
            params: {
              screenTransition: "debug_screen",
              orders: []
            }
          }
        }
      ]
    }
  ]
};
