export type OptionsType = "paper" | "rock" | "scissors" | "lizard" | "spock";

export type StatusType =
  | "ready"
  | "playerSelected"
  | "computerRevealed"
  | "result";

type ReadyState = {
  status: "ready";
  points: number;
};

type PlayerSelectedState = {
  status: "playerSelected";
  points: number;
  playerChoice: OptionsType;
};

type ComputerRevealedState = {
  status: "computerRevealed";
  points: number;
  playerChoice: OptionsType;
  computerChoice: OptionsType;
};

type ResultState = {
  status: "result";
  points: number;
  playerChoice: OptionsType;
  computerChoice: OptionsType;
  result: "player" | "computer" | "tie";
};

export type GameStateType =
  | ReadyState
  | PlayerSelectedState
  | ComputerRevealedState
  | ResultState;

export type GameActionType =
  | {
      type: "player/select";
      payload: OptionsType;
    }
  | { type: "computer/reveal"; payload: OptionsType }
  | { type: "round/resolve" }
  | { type: "round/reset" };
