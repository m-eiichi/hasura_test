import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  type FieldValues,
} from "react-hook-form";

export type EditElementProps<T extends FieldValues> = {
  size?: "s" | "m" | "l";
  register?: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>> | undefined;
  errorAreaFixed?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
  type?:
    | "text"
    | "email"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "url"
    | "week"
    | "month"
    | "datetime-local"
    | "date"
    | "time"
    | "color"
    | "file"
    | "range"
    | "hidden";
  fullWidth?: boolean;
  defaultvalue?: string;
  disabled?: boolean;
  readonly?: boolean;
  numberSpin?: boolean;
};
