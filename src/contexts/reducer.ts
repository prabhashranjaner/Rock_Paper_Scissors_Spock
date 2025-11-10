import type {
  GameActionType,
  GameStateType,
  OptionsType,
} from "../types/gamesTypes";

function declareResult(playerChoice: OptionsType, computerChoice: OptionsType) {
  let result = "";
  if (playerChoice === "rock") {
    if (computerChoice === "rock") result = "draw";
    if (computerChoice === "scissors") result = "win";
    if (computerChoice === "paper") result = "lose";
    if (computerChoice === "spock") result = "lose";
    if (computerChoice === "lizard") result = "win";
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") result = "lose";
    if (computerChoice === "scissors") result = "draw";
    if (computerChoice === "paper") result = "win";
    if (computerChoice === "spock") result = "lose";
    if (computerChoice === "lizard") result = "win";
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") result = "win";
    if (computerChoice === "scissors") result = "lose";
    if (computerChoice === "paper") result = "draw";
    if (computerChoice === "spock") result = "win";
    if (computerChoice === "lizard") result = "lose";
  } else if (playerChoice === "lizard") {
    if (computerChoice === "rock") result = "lose";
    if (computerChoice === "scissors") result = "lose";
    if (computerChoice === "paper") result = "win";
    if (computerChoice === "spock") result = "win";
    if (computerChoice === "lizard") result = "draw";
  } else {
    if (computerChoice === "rock") result = "win";
    if (computerChoice === "scissors") result = "win";
    if (computerChoice === "paper") result = "lose";
    if (computerChoice === "spock") result = "draw";
    if (computerChoice === "lizard") result = "lose";
  }

  return result;
}

export const initialState: GameStateType = {
  playerChoice: null,
  computerChoice: null,
  points: 0,
  step: 1,
  finalResult: "",
};

export default function reducer(state: GameStateType, action: GameActionType) {
  switch (action.type) {
    case "playerChoice/add":
      return { ...state, playerChoice: action.payload, step: 2 };

    case "computerChoice/add":
      return { ...state, computerChoice: action.payload, step: 3 };

    case "step/update":
      return { ...state, step: action.payload };
    case "update/score":
      return { ...state, points: action.payload };

    case "over": {
      let newScore: number = state.points;
      const result = declareResult(state.playerChoice!, state.computerChoice!);
      if (result === "win") newScore = state.points + 1;
      if (result === "lose") newScore = state.points - 1;

      return { ...state, step: 4, finalResult: result, points: newScore };
    }

    case "reset":
      return { ...initialState, points: state.points };

    default:
      return state;
  }
}
