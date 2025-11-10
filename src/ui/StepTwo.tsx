import { useEffect } from "react";
import { useGame } from "../contexts/GameContextProvider";
import Choice from "./Choice";

import ElementSelect from "./ElementSelect";
import type { OptionsType } from "../types/gamesTypes";

const StepTwo = () => {
  const { state, dispatch } = useGame()!;

  useEffect(() => {
    function selectRandomOption() {
      const options = ["paper", "rock", "scissors", "spock", "lizard"];

      // Generate a random index
      const randomIndex = Math.floor(Math.random() * options.length);

      return options[randomIndex] as OptionsType;
    }

    const id = setTimeout(() => {
      dispatch({ type: "computerChoice/add", payload: selectRandomOption() });
    }, 1000);

    return () => clearTimeout(id);
  }, [dispatch]);

  return (
    <Choice
      elementOne={<ElementSelect option={state.playerChoice} />}
      elementTwo={null}
    />
  );
};

export default StepTwo;
