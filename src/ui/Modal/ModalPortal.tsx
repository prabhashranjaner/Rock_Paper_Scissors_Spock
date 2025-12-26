import type { ReactNode } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: { children: ReactNode }) => {
  return createPortal(children, document.body);
};

export default ModalPortal;
