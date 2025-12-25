import { useEffect } from "react";
import Choice from "./Choice";
import ElementSelect from "./ElementSelect";
import { useGameState } from "../contexts/useGameState";
import { useGameDispatch } from "../contexts/useGameDospatch";

const StepThree = () => {
  const state = useGameState();
  const dispatch = useGameDispatch();

  useEffect(() => {
    const id = setTimeout(() => {
      console.log("first");
      dispatch({ type: "over" });
    }, 1000);

    return () => clearTimeout(id);
  }, [dispatch]);

  return (
    <Choice
      elementOne={<ElementSelect option={state.playerChoice} />}
      elementTwo={<ElementSelect option={state.computerChoice} />}
    />
  );
};

export default StepThree;
