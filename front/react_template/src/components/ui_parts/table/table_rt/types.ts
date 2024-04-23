import { Table } from "@tanstack/react-table";

export type TableRTProps = {
  tableInstance: Table<any>;
  size?: "s" | "m" | "l";
  theadFixed?: boolean;
  fixedColumn?: number; //列の固定（左から何列までを固定するかを指定）
  tableHeight?: string;
};
