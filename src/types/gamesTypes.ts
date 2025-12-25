export type OptionsType = "paper" | "rock" | "scissors" | "lizard" | "spock";

export type GameStateType = {
  points: number;
  playerChoice: null | OptionsType;
  computerChoice: null | OptionsType;
  step: number;
  finalResult: string;
};

export type GameActionType =
  | {
      type: "playerChoice/add";
      payload: OptionsType;
    }
  | { type: "computerChoice/add"; payload: OptionsType }
  | { type: "reset" }
  | { type: "step/update"; payload: number }
  | { type: "over" }
  | { type: "update/score"; payload: number };
