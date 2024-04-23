import { createPortal } from "react-dom";

type DialogPortalProps = {
  children: React.ReactNode;
};
export const DialogPortal = ({ children }: DialogPortalProps) => {
  return createPortal(children, document.body);
};
