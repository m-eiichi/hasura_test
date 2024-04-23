export type TableProps = {
  data?: {
    header: (string | number)[];
    column: (string | number)[][];
  };
  size?: "s" | "m" | "l";
  theadFixed?: boolean;
  tableWidth?: string;
  tableHeight?: string;
};
