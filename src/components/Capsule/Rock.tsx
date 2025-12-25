import Capsule from "./Capsule";

const Rock = ({ handleClick }: PropsType) => {
  return (
    <Capsule color="red" handleClick={handleClick}>
      <img alt="icon" src="/images/icon-rock.svg" />
    </Capsule>
  );
};

export default Rock;

type PropsType = {
  handleClick?: () => void | null;
};
