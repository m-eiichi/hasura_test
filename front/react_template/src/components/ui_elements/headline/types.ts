export type HeadlineProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "dt";
  size?: "xxs" | "xs" | "s" | "m" | "l" | "xl";
  color?: "primary" | "secondary" | "tertiary" | "black";
  marginNone?: boolean;
  children: React.ReactNode;
};
