import type { OptionsType } from "../types/gamesTypes";
import Lizard from "./Lizard";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import Spock from "./Spock";

const ElementSelect = ({ option }: PropsType) => {
  if (option === "paper") return <Paper />;
  if (option === "rock") return <Rock />;
  if (option === "scissors") return <Scissors />;
  if (option === "spock") return <Spock />;
  if (option === "lizard") return <Lizard />;
};

export default ElementSelect;

type PropsType = {
  option: OptionsType | null;
};
