import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const StyledRules = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Button = styled.button`
  padding: 0.8rem 3rem;
  font-size: 14px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 8px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 5000 ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1);
  }
`;

const Rules = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <StyledRules>
        <Button onClick={() => setIsModalOpen((s) => !s)}>Rules</Button>
      </StyledRules>

      {isModalOpen && <Modal handleClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Rules;
