import { UseFormRegisterReturn } from "react-hook-form";

export type RadioButtonItem = {
  id: string;
  text: string;
  subText?: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
};

export type RadioButtonProps = {
  size?: "s" | "m" | "l";
  register?: UseFormRegisterReturn;
  id: string;
  name: string;
  value?: string;
  text?: string;
  subText?: string;
  checked?: boolean;
  disabled?: boolean;
  tile?: boolean;
  error?: boolean;
};
