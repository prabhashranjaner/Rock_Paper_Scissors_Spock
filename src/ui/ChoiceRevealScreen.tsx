import { useEffect } from "react";
import ElementSelect from "./ElementSelect";
import { useGameState } from "../contexts/useGameState";
import { useGameDispatch } from "../contexts/useGameDospatch";
import Choice from "../components/Choice/Choice";

const ChoiceRevealScreen = () => {
  const state = useGameState();
  const dispatch = useGameDispatch();

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch({ type: "round/resolve" });
    }, 1000);

    return () => clearTimeout(id);
  }, [dispatch]);

  if (state.status !== "computerRevealed") return null;

  return (
    <Choice
      elementOne={<ElementSelect option={state.playerChoice} />}
      elementTwo={<ElementSelect option={state.computerChoice} />}
    />
  );
};

export default ChoiceRevealScreen;
