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
  status: "ready" as const,
  mode: "extended" as const,
};

export default function reducer(state: GameStateType, action: GameActionType) {
  switch (state.status) {
    case "ready": {
      if (action.type === "player/select") {
        if (state.mode === "classic") {
          return {
            status: "playerSelected",
            mode: "classic",
            points: state.points,
            playerChoice: action.payload as ClassicOptionType,
          } as const;
        }

        return {
          status: "playerSelected",
          mode: "extended",
          points: state.points,
          playerChoice: action.payload as ExtendedOptionType,
        } as const;
      }

      if (action.type === "mode/change") {
        return {
          status: "ready",
          mode: action.payload,
          points: state.points,
        } as const;
      }

      return state;
    }

    case "playerSelected": {
      if (action.type === "computer/reveal") {
        if (state.mode === "classic") {
          return {
            status: "computerRevealed",
            mode: "classic",
            points: state.points,
            playerChoice: state.playerChoice as ClassicOptionType,
            computerChoice: action.payload as ClassicOptionType,
          } as const;
        } else {
          return {
            status: "computerRevealed",
            mode: "extended",
            points: state.points,
            playerChoice: state.playerChoice as ExtendedOptionType,
            computerChoice: action.payload as ExtendedOptionType,
          } as const;
        }
      }

      return state;
    }

    case "computerRevealed": {
      if (action.type !== "round/resolve") return state;
      const result =
        state.mode === "classic"
          ? declareResult("classic", state.playerChoice, state.computerChoice)
          : declareResult("extended", state.playerChoice, state.computerChoice);

      const updatedPoints =
        result === "player"
          ? state.points + 1
          : result === "computer"
          ? state.points - 1
          : state.points;

      if (state.mode === "classic") {
        return {
          status: "result",
          mode: state.mode,
          points: updatedPoints,
          playerChoice: state.playerChoice,
          computerChoice: state.computerChoice,
          result,
        } as const;
      } else {
        return {
          status: "result",
          mode: state.mode,
          points: updatedPoints,
          playerChoice: state.playerChoice,
          computerChoice: state.computerChoice,
          result,
        } as const;
      }
    }

    case "result": {
      if (action.type === "mode/change")
        return {
          status: "ready",
          mode: action.payload,
          points: state.points,
        } as const;

      if (action.type === "round/reset")
        return {
          status: "ready",
          points: state.points,
          mode: state.mode,
        } as const;

      return state;
    }

    default:
      return assertNever(state); // <-- exhaustiveness guard
  }
}

function assertNever(x: never): never {
  throw new Error(`Unhandled case: ${x}`);
}
