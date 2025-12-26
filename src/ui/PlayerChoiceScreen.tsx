import { useEffect } from "react";
import ElementSelect from "./ElementSelect";
import { useGameState } from "../contexts/useGameState";
import { useGameDispatch } from "../contexts/useGameDospatch";
import Choice from "../components/Choice/Choice";
import type {
  ClassicOptionType,
  ExtendedOptionType,
  GameModeType,
} from "../types/gamesTypes";

const classicOptions = ["rock", "paper", "scissors"] as const;
const extendedOptions = [
  "rock",
  "paper",
  "scissors",
  "lizard",
  "spock",
] as const;

const PlayerChoiceScreen = () => {
  const state = useGameState();
  const dispatch = useGameDispatch();

  useEffect(() => {
    if (state.status !== "playerSelected") return;

    function selectRandomOption(mode: "classic"): ClassicOptionType;
    function selectRandomOption(mode: "extended"): ExtendedOptionType;
    function selectRandomOption(mode: GameModeType) {
      const options = mode === "classic" ? classicOptions : extendedOptions;

      const randomIndex = Math.floor(Math.random() * options.length);

      return options[randomIndex];
    }

    const id = setTimeout(() => {
      if (state.mode === "classic") {
        dispatch({
          type: "computer/reveal",
          mode: "classic",
          payload: selectRandomOption("classic"),
        });
      } else {
        dispatch({
          type: "computer/reveal",
          mode: "extended",
          payload: selectRandomOption("extended"),
        });
      }
    }, 1000);

    return () => clearTimeout(id);
  }, [state.status, dispatch, state.mode]);

  if (state.status !== "playerSelected") return null;

  return (
    <Choice
      elementOne={<ElementSelect option={state.playerChoice} />}
      elementTwo={null}
    />
  );
};

export default PlayerChoiceScreen;
