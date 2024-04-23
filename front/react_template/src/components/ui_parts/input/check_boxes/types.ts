import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  FieldValues,
} from "react-hook-form";

export type CheckBoxItemProps = {
  id: string;
  value?: string;
  text?: string;
  subText?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
};

export type CheckBoxesProps<T extends FieldValues> = {
  label?: string;
  requirement?: boolean;
  id?: string;
  disabled?: boolean;
  supportText?: string;
  size?: "s" | "m" | "l";
  register?: UseFormRegisterReturn;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>> | undefined;
  name: string;
  items?: CheckBoxItemProps[];
  vertical?: boolean;
  tile?: boolean;
};
