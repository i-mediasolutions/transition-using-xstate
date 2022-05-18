function statesBuilder(transitionMap) {
  const states = {};

  Object.entries(transitionMap).forEach(([key, value]) => {
    const pathwayId = key;
    const screen = value;
    states[pathwayId] = {};

    if (screen.rules) {
      states[pathwayId] = {
        on: {
          NEXT: screen.rules.map((rule) => {
            console.log(rule);
            return {
              target: rule.transitionTo,
              cond: {
                type: "transition",
                rule
              }
            };
          })
        }
      };
    } else {
      states[pathwayId].type = "final";
    }
  });
  return states;
}

// produces visualization: https://xstate.js.org/viz/?gist=a0ec2dc8d4385a7c6e5a52675b265d32
export function buildMachine(pathway) {
  return {
    id: pathway.id,
    initial: pathway.screens[0].id,
    states: statesBuilder(pathway.transitionMap)
  };
}

export function customGuards() {
  return {
    guards: {
      transition: (context, event, { cond }) => {
        const { selectedOptions } = event.payload;
        console.log(selectedOptions);
        const { rule } = cond;

        if (rule.all && rule.all.length === selectedOptions.length) {
          return rule.all.every((opt) => selectedOptions.includes(opt));
        }

        if (rule.any) {
          let doesExist = false;
          selectedOptions.forEach((selectedOption) => {
            if (rule.any.includes(selectedOption)) {
              doesExist = true;
            }
          });
          return doesExist;
        }

        return false;
      }
    }
  };
}
