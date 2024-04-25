import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  type FieldValues,
} from "react-hook-form";

export type OptionProps = {
  text: string;
  value: string | number;
};

export type SelectElementProps<T extends FieldValues> = {
  size?: "s" | "m" | "l";
  fullWidth?: boolean;
  register?: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>> | undefined;
  name?: string;
  id?: string;
  options?: OptionProps[];
  disabled?: boolean;
  defaultvalue?: string | number;
  handleChange?:
    | React.ChangeEventHandler<HTMLSelectElement>[]
    | React.ChangeEventHandler<HTMLSelectElement>;
};
