import { UseFormRegisterReturn } from "react-hook-form";

export type RadioButtonIconProps = {
  id: string;
  name: string;
  value?: string;
  checked?: boolean;
  status?: "error" | "disabled";
  register?: UseFormRegisterReturn;
  error?: boolean;
};
