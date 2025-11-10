import Capsule from "./Capsule";

const Spock = ({ handleClick }: PropsType) => {
  return (
    <Capsule color="sky" handleClick={handleClick}>
      <img alt="icon" src="/images/icon-spock.svg" />
    </Capsule>
  );
};

export default Spock;

type PropsType = {
  handleClick?: () => void | null;
};
