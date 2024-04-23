import { CheckBoxItemProps } from "../../types";

export type CheckBoxesRhfForSbProps = {
  min?: number;
  max?: number;
  label?: string;
  requirement?: boolean;
  supportText?: string;
  size?: "s" | "m" | "l";
  name: string;
  items: CheckBoxItemProps[];
  vertical?: boolean;
  tile?: boolean;
};
