import { useEffect } from "react";
import { useGame } from "../contexts/GameContextProvider";
import Choice from "./Choice";
import ElementSelect from "./ElementSelect";

const StepThree = () => {
  const { state, dispatch } = useGame()!;

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
