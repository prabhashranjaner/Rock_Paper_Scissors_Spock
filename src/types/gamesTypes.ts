import type { classicRules, extendedRules } from "../contexts/reducer";

export type ClassicOptionType = "rock" | "paper" | "scissors";
export type ExtendedOptionType = ClassicOptionType | "lizard" | "spock";
export type ResultType = "player" | "computer" | "tie";
export type GameModeType = "classic" | "extended";
export type StatusType =
  | "ready"
  | "playerSelected"
  | "computerRevealed"
  | "result";

type ReadyState = {
  status: "ready";
  points: number;
  mode: GameModeType;
};

type ClassicPlayerSelectedState = {
  status: "playerSelected";
  mode: "classic";
  points: number;
  playerChoice: keyof typeof classicRules;
};

type ExtendedPlayerSelectedState = {
  status: "playerSelected";
  mode: "extended";
  points: number;
  playerChoice: keyof typeof extendedRules;
};

type ClassicComputerRevealedState = {
  status: "computerRevealed";
  mode: "classic";
  points: number;
  playerChoice: keyof typeof classicRules;
  computerChoice: keyof typeof classicRules;
};

type ExtendedComputerRevealedState = {
  status: "computerRevealed";
  mode: "extended";
  points: number;
  playerChoice: keyof typeof extendedRules;
  computerChoice: keyof typeof extendedRules;
};

type ClassicResultState = {
  status: "result";
  mode: "classic";
  points: number;
  playerChoice: keyof typeof classicRules;
  computerChoice: keyof typeof classicRules;
  result: ResultType;
};

type ExtendedResultState = {
  status: "result";
  mode: "extended";
  points: number;
  playerChoice: keyof typeof extendedRules;
  computerChoice: keyof typeof extendedRules;
  result: ResultType;
};

export type GameStateType =
  | ReadyState
  | ClassicPlayerSelectedState
  | ExtendedPlayerSelectedState
  | ClassicComputerRevealedState
  | ExtendedComputerRevealedState
  | ClassicResultState
  | ExtendedResultState;

export type GameActionType =
  | {
      type: "player/select";
      mode: "classic";
      payload: ClassicOptionType;
    }
  | {
      type: "player/select";
      mode: "extended";
      payload: ExtendedOptionType;
    }
  | {
      type: "computer/reveal";
      mode: "classic";
      payload: ClassicOptionType;
    }
  | {
      type: "computer/reveal";
      mode: "extended";
      payload: ExtendedOptionType;
    }
  | { type: "round/resolve" }
  | { type: "round/reset" }
  | { type: "mode/change"; payload: GameModeType };
