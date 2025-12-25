import { useEffect, useReducer, type ReactNode } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";
import reducer, { initialState } from "./reducer";
import { GameStateContext } from "./useGameState";
import { GameDispatchContext } from "./useGameDospatch";

export default function GameContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [value, setValue] = useLocalStorageState("game-score", 0);
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    points: value,
  });

  useEffect(() => {
    setValue(state.points);
  }, [state.points, setValue]);

  return (
    <GameStateContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  );
}
