import { FieldValues } from "react-hook-form";
import { EditElementProps } from "@/components/ui_elements/input/edit_element/types";

export type EditProps<T extends FieldValues> = EditElementProps<T> & {
  label?: string;
  requirement?: boolean;
  supportText?: string;
};
