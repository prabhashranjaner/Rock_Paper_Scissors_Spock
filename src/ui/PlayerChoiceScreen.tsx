import { useEffect } from "react";
import ElementSelect from "./ElementSelect";
import type { OptionsType } from "../types/gamesTypes";
import { useGameState } from "../contexts/useGameState";
import { useGameDispatch } from "../contexts/useGameDospatch";
import Choice from "../components/Choice/Choice";

const PlayerChoiceScreen = () => {
  const state = useGameState();
  const dispatch = useGameDispatch();

  useEffect(() => {
    if (state.status !== "playerSelected") return;

    function selectRandomOption(): OptionsType {
      const options: OptionsType[] = [
        "paper",
        "rock",
        "scissors",
        "spock",
        "lizard",
      ];

      // Generate a random index
      const randomIndex = Math.floor(Math.random() * options.length);

      return options[randomIndex];
    }

    const id = setTimeout(() => {
      dispatch({ type: "computer/reveal", payload: selectRandomOption() });
    }, 1000);

    return () => clearTimeout(id);
  }, [state.status, dispatch]);

  if (state.status !== "playerSelected") return null;

  return (
    <Choice
      elementOne={<ElementSelect option={state.playerChoice} />}
      elementTwo={null}
    />
  );
};

export default PlayerChoiceScreen;
