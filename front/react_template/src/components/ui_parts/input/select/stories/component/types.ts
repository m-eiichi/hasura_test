import { OptionProps } from "@/components/ui_elements/input/select_element/types";

export type SelectRhfForSbProps = {
  min?: number;
  label?: string;
  requirement?: boolean;
  supportText?: string;
  size?: "s" | "m" | "l";
  fullWidth?: boolean;
  // name?: string;
  id?: string;
  options: OptionProps[];
  disabled?: boolean;
  defaultvalue?: string | number;
};
