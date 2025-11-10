import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import type { GameContextType } from "../types/gamesTypes";
import useLocalStorageState from "../hooks/useLocalStorageState";
import reducer, { initialState } from "./reducer";

const GameContext = createContext<GameContextType | null>(null);

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
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

// eslint-disable-next-line
export function useGame() {
  const context = useContext(GameContext);

  return context;
}
