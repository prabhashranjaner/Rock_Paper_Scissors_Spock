import type {
  GameActionType,
  GameStateType,
  OptionsType,
} from "../types/gamesTypes";

const rules: Record<OptionsType, OptionsType[]> = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

function declareResult(playerChoice: OptionsType, computerChoice: OptionsType) {
  if (playerChoice === computerChoice) return "tie";
  if (rules[playerChoice].includes(computerChoice)) return "player";

  return "computer";
}

export const initialState: GameStateType = {
  points: 0,
  status: "ready",
};

export default function reducer(state: GameStateType, action: GameActionType) {
  switch (state.status) {
    case "ready": {
      if (action.type !== "player/select") return state;

      return {
        status: "playerSelected",
        playerChoice: action.payload,
        points: state.points,
      };
    }

    case "playerSelected": {
      if (action.type !== "computer/reveal") return state;
      return {
        status: "computerRevealed",
        points: state.points,
        playerChoice: state.playerChoice,
        computerChoice: action.payload,
      };
    }

    case "computerRevealed": {
      if (action.type !== "round/resolve") return state;

      const result = declareResult(state.playerChoice, state.computerChoice);

      const updatedPoints =
        result === "player"
          ? state.points + 1
          : result === "computer"
          ? state.points - 1
          : state.points;

      return {
        status: "result",
        points: updatedPoints,
        playerChoice: state.playerChoice,
        computerChoice: state.computerChoice,
        result,
      };
    }

    case "result": {
      if (action.type !== "round/reset") return state;

      return {
        status: "ready",
        points: state.points,
      };
    }

    default:
      return assertNever(state); // <-- exhaustiveness guard
  }
}

function assertNever(x: never): never {
  throw new Error(`Unhandled case: ${x}`);
}
