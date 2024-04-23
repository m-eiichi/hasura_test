export type TextAreaRhfForSbProps = {
  min_length?: number;
  max_length?: number;
  id?: string;
  size?: "s" | "m" | "l";
  label?: string;
  requirement?: boolean;
  supportText?: string;
  rows?: number;
  cols?: number;
  fullWidth?: boolean;
  disabled?: boolean;
  fixed?: boolean;
};
