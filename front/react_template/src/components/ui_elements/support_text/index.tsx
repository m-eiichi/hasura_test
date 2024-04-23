import { supportTextProps } from "./types";
import Styles from "./support_text.module.css";

export const SupportText = (props: supportTextProps) => {
  const { disabled, children } = props;
  const text = [Styles.text, disabled === true ? Styles.disabled : ""];
  return <p className={text.join(" ")}>{children}</p>;
};
