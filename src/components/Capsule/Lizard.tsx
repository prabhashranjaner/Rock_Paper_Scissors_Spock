import Capsule from "./Capsule";

const Lizard = ({ handleClick }: PropsType) => {
  return (
    <Capsule color="purple" handleClick={handleClick}>
      <img alt="icon" src="/images/icon-lizard.svg" />
    </Capsule>
  );
};

export default Lizard;

type PropsType = {
  handleClick?: () => void | null;
};
