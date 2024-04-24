import {
  UseFormRegisterReturn,
  FieldError,
  FieldErrorsImpl,
  Merge,
  FieldValues,
} from "react-hook-form";

export type RadioButtonItemProps = {
  id: string;
  value?: string;
  text?: string;
  subText?: string;
  disabled?: boolean;
  error?: boolean;
  checked?: boolean;
};

export type RadioButtonsProps<T extends FieldValues> = {
  label?: string;
  requirement?: boolean;
  disabled?: boolean;
  supportText?: string;
  size?: "s" | "m" | "l";
  name: string;
  register?: UseFormRegisterReturn;
  items?: RadioButtonItemProps[];
  vertical?: boolean;
  tile?: boolean;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>> | undefined;
  noErrorAreaFixed?: boolean;
};
