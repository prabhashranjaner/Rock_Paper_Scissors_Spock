import Lizard from "../components/Capsule/Lizard";
import Paper from "../components/Capsule/Paper";
import Rock from "../components/Capsule/Rock";
import Scissors from "../components/Capsule/Scissors";
import Spock from "../components/Capsule/Spock";
import type {
  ClassicOptionType,
  ExtendedOptionType,
} from "../types/gamesTypes";

const ElementSelect = ({ option }: PropsType) => {
  if (option === "paper") return <Paper />;
  if (option === "rock") return <Rock />;
  if (option === "scissors") return <Scissors />;
  if (option === "spock") return <Spock />;
  if (option === "lizard") return <Lizard />;
};

export default ElementSelect;

type PropsType = {
  option: ExtendedOptionType | null | ClassicOptionType;
};
