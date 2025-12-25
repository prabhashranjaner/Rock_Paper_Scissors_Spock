import type { GameStateType } from "../types/gamesTypes";
import { createContext, useContext } from "react";

export const GameStateContext = createContext<GameStateType | undefined>(
  undefined
);

export function useGameState() {
  const context = useContext(GameStateContext);

  if (!context) throw new Error("State Context Called out of provider");

  return context;
}
