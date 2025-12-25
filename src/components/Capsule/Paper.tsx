import Capsule from "./Capsule";

const Paper = ({ handleClick }: PropsType) => {
  return (
    <Capsule color="blue" handleClick={handleClick}>
      <img alt="icon" src="/images/icon-paper.svg" />
    </Capsule>
  );
};

export default Paper;

type PropsType = {
  handleClick?: () => void | null;
};
