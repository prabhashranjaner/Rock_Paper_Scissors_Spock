import type {
  ClassicOptionType,
  ExtendedOptionType,
  GameActionType,
  GameModeType,
  GameStateType,
  ResultType,
} from "../types/gamesTypes";

export const classicRules: Record<ClassicOptionType, ClassicOptionType[]> = {
  rock: ["scissors"],
  paper: ["rock"],
  scissors: ["paper"],
};

export const extendedRules: Record<ExtendedOptionType, ExtendedOptionType[]> = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

export function getRules(mode: "classic"): typeof classicRules;
export function getRules(mode: "extended"): typeof extendedRules;
export function getRules(mode: GameModeType) {
  return mode === "classic" ? classicRules : extendedRules;
}

function declareResult(
  mode: GameModeType,
  player: ClassicOptionType | ExtendedOptionType,
  computer: ClassicOptionType | ExtendedOptionType
): ResultType {
  if (mode === "classic") {
    const rules = classicRules;

    if (player === computer) return "tie";

    return rules[player as ClassicOptionType].includes(
      computer as ClassicOptionType
    )
      ? "player"
      : "computer";
  }

  // extended mode
  const rules = extendedRules;

  if (player === computer) return "tie";

  return rules[player as ExtendedOptionType].includes(
    computer as ExtendedOptionType
  )
    ? "player"
    : "computer";
}

export const initialState: GameStateType = {
  points: 0,
  status: "ready",
  mode: "extended",
};

export default function reducer(state: GameStateType, action: GameActionType) {
  switch (state.status) {
    case "ready": {
      if (action.type === "mode/change")
        return { ...state, mode: action.payload };

      if (action.type === "player/select")
        return {
          status: "playerSelected",
          playerChoice: action.payload,
          points: state.points,
          mode: state.mode,
        };

      return state;
    }

    case "playerSelected": {
      if (action.type !== "computer/reveal") return state;
      return {
        status: "computerRevealed",
        mode: state.mode,
        points: state.points,
        playerChoice: state.playerChoice,
        computerChoice: action.payload,
      };
    }

    case "computerRevealed": {
      if (action.type !== "round/resolve") return state;
      let result: ResultType;

      if (state.mode === "classic") {
        result = declareResult(
          "classic",
          state.playerChoice as ClassicOptionType,
          state.computerChoice as ClassicOptionType
        );
      }

      result = declareResult(
        "extended",
        state.playerChoice as ExtendedOptionType,
        state.computerChoice as ExtendedOptionType
      );

      const updatedPoints =
        result === "player"
          ? state.points + 1
          : result === "computer"
          ? state.points - 1
          : state.points;

      return {
        status: "result",
        mode: state.mode,
        points: updatedPoints,
        playerChoice: state.playerChoice,
        computerChoice: state.computerChoice,
        result,
      };
    }

    case "result": {
      if (action.type === "mode/change")
        return {
          status: "ready",
          mode: action.payload,
          points: state.points,
        };

      if (action.type === "round/reset")
        return {
          status: "ready",
          points: state.points,
          mode: state.mode,
        };

      return state;
    }

    default:
      return assertNever(state); // <-- exhaustiveness guard
  }
}

function assertNever(x: never): never {
  throw new Error(`Unhandled case: ${x}`);
}
