import { FieldValues } from "react-hook-form";
import { SelectElementProps } from "@/components/ui_elements/input/select_element/types";

export type SelectProps<T extends FieldValues> = SelectElementProps<T> & {
  label?: string;
  requirement?: boolean;
  supportText?: string;
};
