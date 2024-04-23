export type InputButtonProps = {
  disabled?: boolean;
  fullWidth?: boolean;
  color?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "s" | "m" | "l";
  id?: string;
  value: string;
  type?: "button" | "reset" | "submit";
};
