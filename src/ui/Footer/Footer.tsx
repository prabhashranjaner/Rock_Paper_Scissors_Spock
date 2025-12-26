import { useState } from "react";

import { ButtonStyle, FooterStyle } from "./Footer.style";
import { useGameDispatch } from "../../contexts/useGameDospatch";
import { useGameState } from "../../contexts/useGameState";
import Modal from "../Modal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useGameDispatch();
  const state = useGameState();

  return (
    <FooterStyle>
      <ButtonStyle onClick={() => setIsModalOpen((s) => !s)}>Rules</ButtonStyle>

      {state.mode === "classic" ? (
        <ButtonStyle
          onClick={() => dispatch({ type: "mode/change", payload: "extended" })}
        >
          Play Advance Version
        </ButtonStyle>
      ) : (
        <ButtonStyle
          onClick={() => dispatch({ type: "mode/change", payload: "classic" })}
        >
          Play Classic Version
        </ButtonStyle>
      )}

      {isModalOpen && <Modal handleClose={() => setIsModalOpen(false)} />}
    </FooterStyle>
  );
};

export default Footer;
