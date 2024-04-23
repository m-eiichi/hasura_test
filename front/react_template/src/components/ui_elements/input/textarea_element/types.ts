import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  type FieldValues,
} from "react-hook-form";

export type TextAreaElementProps<T extends FieldValues> = {
  id?: string;
  name?: string;
  size?: "s" | "m" | "l";
  register?: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>> | undefined;
  rows?: number;
  cols?: number;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  fixed?: boolean;
  fullWidth?: boolean;
};
