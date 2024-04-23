import { RadioButtonItemProps } from "../../types";

export type RadioButtonsRhfForSbProps = {
  label?: string;
  requirement?: boolean;
  supportText?: string;
  size?: "s" | "m" | "l";
  name: string;
  items: RadioButtonItemProps[];
  vertical?: boolean;
  tile?: boolean;
};
