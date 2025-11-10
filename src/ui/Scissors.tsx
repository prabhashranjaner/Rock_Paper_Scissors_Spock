import Capsule from "./Capsule";

const Scissors = ({ handleClick }: PropsType) => {
  return (
    <Capsule color="gold" handleClick={handleClick}>
      <img alt="icon" src="/images/icon-scissors.svg" />
    </Capsule>
  );
};

export default Scissors;

type PropsType = {
  handleClick?: () => void | null;
};
