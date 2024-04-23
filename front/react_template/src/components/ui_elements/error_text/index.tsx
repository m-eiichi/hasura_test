import { errorTextProps } from "./types";
import Styles from "./error_text.module.css";

export const ErrorText = (props: errorTextProps) => {
  const { children } = props;
  return <p className={Styles.text}>{children}</p>;
};
