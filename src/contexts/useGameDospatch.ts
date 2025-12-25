import type { GameActionType } from "../types/gamesTypes";
import { createContext, useContext, type Dispatch } from "react";

export const GameDispatchContext = createContext<
  Dispatch<GameActionType> | undefined
>(undefined);

export function useGameDispatch() {
  const context = useContext(GameDispatchContext);

  if (!context) throw new Error("Dispatch Context Called out of provider");

  return context;
}
