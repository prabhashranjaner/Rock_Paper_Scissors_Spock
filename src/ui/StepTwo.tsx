import { useEffect } from "react";
import ElementSelect from "./ElementSelect";
import type { OptionsType } from "../types/gamesTypes";
import { useGameState } from "../contexts/useGameState";
import { useGameDispatch } from "../contexts/useGameDospatch";
import Choice from "../components/Choice/Choice";

const StepTwo = () => {
  const state = useGameState();
  const dispatch = useGameDispatch();

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
